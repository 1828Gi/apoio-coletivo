import { bomPrato } from '../DB';
import { temporizadorRandômico } from '../../utils';

export const buscarBomPrato = async () => {
  await temporizadorRandômico();

  return bomPrato;
};
