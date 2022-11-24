import { saúde } from '../DB';
import { temporizadorRandômico } from '../../utils';

export const buscarSaúde = async () => {
  await temporizadorRandômico();

  return saúde;
};
