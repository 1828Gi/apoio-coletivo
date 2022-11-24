import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { buscarAlbergues } from '../../api/Services';
import { CardsBase, Carregando, Erro, Vazio, Tela, Título } from '../../componentes';
import { estáVazio } from '../../utils';

export default function Albergues() {
  const [albergues, setAlbergues] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [erro, setError] = useState(false);

  const buscarUnidades = async () => {
    setCarregando(true);
    setError(false);

    try {
      const albergues = await buscarAlbergues();

      setAlbergues(albergues);
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

  if (estáVazio(albergues?.unidades)) return (
    <Vazio texto="Desculpe, mas nenhum albergue foi encontrado no momento."/>
  );

  return (
    <Tela>
      <StatusBar style="auto" />
      <Título>{albergues?.descrição}</Título>
      <CardsBase unidadesProps={albergues?.unidades} />
    </Tela>
  );
}
