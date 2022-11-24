import { albergues } from '../DB';
import { temporizadorRandômico } from '../../utils';

export const buscarAlbergues = async () => {
  await temporizadorRandômico();

  return albergues;
};
