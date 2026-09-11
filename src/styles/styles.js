import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8f0',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#2e7d32',
    width: '100%',
    paddingTop: 60,
    paddingBottom: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  slogan: {
    fontSize: 13,
    color: '#c8e6c9',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    marginTop: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#33691e',
  },
  subtitulo: {
    fontSize: 13,
    color: '#7cb342',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#558b2f',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  avisoBox: {
    marginTop: 16,
    backgroundColor: '#fff3cd',
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#e6a817',
  },
  avisoTexto: {
    color: '#856404',
  },
  fotoBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  fotoLabel: {
    fontSize: 13,
    color: '#558b2f',
    marginBottom: 8,
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 8,
  },
  statusBox: {
    marginBottom: 20,
  },
  statusLabel: {
    fontSize: 13,
    color: '#7cb342',
  },
  statusValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 4,
  },
  statusValorRuim: {
    color: '#c62828',
  },
  menuBotao: {
    backgroundColor: '#558b2f',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    marginTop: 14,
    alignItems: 'center',
  },
});