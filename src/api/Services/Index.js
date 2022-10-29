import { bomPrato } from '../DB';

const valorRandômico = Math.floor(Math.random() * 2000 - 100);

const temporizadorRandômico = () => {
  return new Promise(_ => setTimeout(_, valorRandômico));
};

export const buscarBomPrato = async () => {
  await temporizadorRandômico();

  return bomPrato;
};
