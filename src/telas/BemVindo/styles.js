import { StyleSheet } from 'react-native';
import { cor } from '../../../src/tema';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cor.planoDeFundo,
  },
  título: {
    alignSelf: 'center',
    fontSize: 48,
    color: cor.primária,
    fontWeight: 'bold',
    marginTop: 48,
  },
  botão: {
    backgroundColor: cor.primária,
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
    color: cor.branco,
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoImagem: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 240,
    marginTop: 32,
  },
});
