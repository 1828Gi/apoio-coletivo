import { bomPrato } from '../DB';
import { temporizadorRand├┤mico } from '../../utils';

export const buscarBomPrato = async () => {
  await temporizadorRand├┤mico();

  return bomPrato;
};
