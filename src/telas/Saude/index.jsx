import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { buscarSaúde } from '../../api/Services';
import { CardsBase, Carregando, Erro, Tela, Título, Vazio } from '../../componentes';
import { estáVazio } from '../../utils';

export default function Saúde() {
  const [saúde, setSaúde] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [erro, setError] = useState(false);

  const buscarUnidades = async () => {
    setCarregando(true);
    setError(false);

    try {
      const saúde = await buscarSaúde();

      setSaúde(saúde);
    } catch (_) {
      setError(true);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarUnidades();
  }, []);

  if (carregando) return <Carregando />;

  if (erro) return <Erro aoRecarregar={buscarUnidades} />;

  if (estáVazio(saúde?.unidades)) return (
    <Vazio texto="Desculpe, mas nenhuma unidade de saúde foi encontrada no momento." />
  );

  return (
    <Tela>
      <StatusBar style="auto" />
      <Título>{saúde?.descrição}</Título>
      <CardsBase unidadesProps={saúde?.unidades} />
    </Tela>
  );
}
