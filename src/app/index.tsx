import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🌾 AgroVista</Text>
        <Text style={styles.slogan}>Gestão de Visitas Técnicas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Menu Principal</Text>
        <Text style={styles.subtitulo}>Selecione uma opção</Text>

        <TouchableOpacity
          style={styles.menuBotao}
          onPress={() => router.push("/visita")}
        >
          <Text style={styles.textoBotao}>📷 Nova Visita Técnica</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBotao}
          onPress={() => router.push("/auditoria")}
        >
          <Text style={styles.textoBotao}>📊 Fechamento de Auditoria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
