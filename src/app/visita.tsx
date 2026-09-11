import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
    Alert,
    Image,
    Linking,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "../styles/styles";

export default function VisitaScreen() {
  const [foto, setFoto] = useState<string | null>(null);
  const [permissaoNegada, setPermissaoNegada] = useState(false);

  async function tirarFoto() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (permissao.status !== "granted") {
      if (permissao.canAskAgain === false) {
        setPermissaoNegada(true);
        Alert.alert(
          "Câmera bloqueada",
          "O acesso à câmera foi negado permanentemente. Pra registrar fotos da visita técnica, libere o acesso manualmente nas configurações do celular.",
          [
            { text: "Cancelar", style: "cancel" },
            { text: "Abrir Configurações", onPress: abrirConfiguracoes },
          ],
        );
      } else {
        Alert.alert(
          "Permissão necessária",
          "Precisamos da câmera pra registrar a visita na propriedade.",
        );
      }
      return;
    }

    setPermissaoNegada(false);

    const resultado = await ImagePicker.launchCameraAsync({
      quality: 0.7,
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  function abrirConfiguracoes() {
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      Linking.openSettings();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🌾 AgroVista</Text>
        <Text style={styles.slogan}>Gestão de Visitas Técnicas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Nova Visita Técnica</Text>
        <Text style={styles.subtitulo}>Fazenda Santa Rita - Talhão 04</Text>

        <TouchableOpacity style={styles.botao} onPress={tirarFoto}>
          <Text style={styles.textoBotao}>📷 Registrar Foto da Visita</Text>
        </TouchableOpacity>

        {permissaoNegada && (
          <View style={styles.avisoBox}>
            <Text style={styles.avisoTexto}>
              A câmera está bloqueada pro app. Toque no botão acima e depois em
              "Abrir Configurações" pra liberar o acesso.
            </Text>
          </View>
        )}

        {foto && (
          <View style={styles.fotoBox}>
            <Text style={styles.fotoLabel}>Foto registrada:</Text>
            <Image source={{ uri: foto }} style={styles.imagem} />
          </View>
        )}
      </View>
    </View>
  );
}
