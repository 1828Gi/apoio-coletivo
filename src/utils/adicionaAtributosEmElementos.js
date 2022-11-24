export const adicionaAtributosEmElementos = (elementos, atributo, valorPadrão = false) => {
  if (!Array.isArray(elementos)) return null;

  return elementos.map(elemento => ({ ...elemento, [atributo]: valorPadrão }));
};
