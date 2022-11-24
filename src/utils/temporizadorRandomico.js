const valorRandômico = Math.floor(Math.random() * 2500 - 100);

export const temporizadorRandômico = () => new Promise(_ => setTimeout(_, valorRandômico));
