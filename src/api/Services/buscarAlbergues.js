import { albergues } from '../DB';
import { temporizadorRand├┤mico } from '../../utils';

export const buscarAlbergues = async () => {
  await temporizadorRand├┤mico();

  return albergues;
};
