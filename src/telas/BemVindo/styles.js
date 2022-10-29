import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  título: {
    alignSelf: 'center',
    fontSize: 48,
    color: '#0397a5',
    fontWeight: 'bold',
    marginTop: 48,
  },
  botão: {
    backgroundColor: '#0397a5',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 24,
    margin: 12,
  },
  botãoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botãoImagem: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  botãoImagemAjuste: {
    width: 76,
    marginLeft: -8,
  },
  botãoTexto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'center',
    alignSelf: 'center',
    width: 280,
    height: 280,
    marginTop: 32,
  },
});
