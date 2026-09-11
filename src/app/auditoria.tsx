import { Accelerometer } from "expo-sensors";
import { useEffect, useRef, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export default function AuditoriaScreen() {
  const [instavel, setInstavel] = useState(false);
  const magnitudeRef = useRef(1);

  useEffect(() => {
    Accelerometer.setUpdateInterval(200);

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const magnitude = Math.sqrt(x * x + y * y + z * z);
      magnitudeRef.current = magnitude;
      setInstavel(magnitude > 2.0);
    });

    return () => subscription.remove();
  }, []);

  function enviarAuditoria() {
    if (magnitudeRef.current > 2.0) {
      Alert.alert(
        "Instabilidade Física Detectada",
        "O aparelho apresentou movimentação brusca durante o fechamento. Segure o celular firme e tente novamente.",
      );
      return;
    }

    Alert.alert(
      "Auditoria Enviada",
      "Os dados da visita técnica foram enviados com sucesso.",
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🌾 AgroVista</Text>
        <Text style={styles.slogan}>Fechamento de Auditoria</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Talhão 04 - Fazenda Santa Rita</Text>

        <View style={styles.statusBox}>
          <Text style={styles.statusLabel}>Status do aparelho:</Text>
          <Text
            style={[styles.statusValor, instavel && styles.statusValorRuim]}
          >
            {instavel ? "Instável ⚠️" : "Estável ✅"}
          </Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={enviarAuditoria}>
          <Text style={styles.textoBotao}>Enviar Auditoria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
