import { StyleSheet } from 'react-native';
import { cor } from '../../tema';

export const styles = StyleSheet.create({
  cardUnidades: {
    backgroundColor: cor.branco,
    margin: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: cor.borda,
  },
  cardNome: {
    color: cor.primária,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  cardEndereço: {
    color: cor.secundária,
    marginBottom: 4,
  },
  cardMaisInformações: {
    marginTop: 8,
    fontSize: 12,
  },
  cardContainerBotões: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBotãoInformações: {
    paddingVertical: 8,
    borderRadius: 4,
  },
  cardBotãoInformaçõesImagem: {
    width: 18,
    height: 18,
  },
  cardBotãoComoChegar: {
    backgroundColor: cor.primária,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  cardBotãoComoChegarTexto: {
    color: cor.branco,
    fontWeight: 'bold',
  },
  cardBotãoComoChegarImagem: {
    width: 14,
    height: 18,
  },
});
