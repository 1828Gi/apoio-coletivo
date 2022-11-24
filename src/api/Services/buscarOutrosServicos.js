import { outrosServiços } from '../DB';
import { temporizadorRandômico } from '../../utils';

export const buscarOutrosServiços = async () => {
  await temporizadorRandômico();

  return outrosServiços;
};
