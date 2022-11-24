import { StyleSheet } from 'react-native';
import { cor } from '../../tema';

export const styles = StyleSheet.create({
  cardServiços: {
    margin: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: cor.borda,
  },
  cardTítulo: {
    color: cor.primária,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardImagem: {
    resizeMode: 'contain',
    width: 'auto',
  },
  cardDescrição: {
    color: cor.texto,
  },
  cardMaisInformações: {
    marginTop: 8,
    fontSize: 12,
  },
});
