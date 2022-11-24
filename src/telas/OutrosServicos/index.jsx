import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { buscarOutrosServiços } from '../../api/Services';
import { CardsOutrosServiços, Carregando, Erro, Vazio, Tela, Título } from '../../componentes';
import { estáVazio } from '../../utils';

export default function OutrosServiços() {
  const [carregando, setCarregando] = useState(false);
  const [outrosServiços, setOutrosServiços] = useState({});
  const [erro, setError] = useState(false);

  const buscarServiços = async () => {
    setCarregando(true);
    setError(false);

    try {
      const outrosServiços = await buscarOutrosServiços();

      setOutrosServiços(outrosServiços);
    } catch (_) {
      setError(true);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarServiços();
  }, []);

  if (carregando) return <Carregando />;

  if (erro) return <Erro aoRecarregar={buscarServiços} />;

  if (estáVazio(outrosServiços?.serviços)) return <Vazio texto="Desculpe, mas nenhum serviço foi encontrado no momento."/>;

  return (
    <Tela>
      <StatusBar style="auto" />
      <Título>{outrosServiços.descrição}</Título>
      <CardsOutrosServiços serviçosProps={outrosServiços?.serviços} />
    </Tela>
  );
}
