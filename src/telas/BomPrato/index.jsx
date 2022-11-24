import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { buscarBomPrato } from '../../api/Services';
import { CardsBase, Carregando, Erro, Vazio, Tela, Título } from '../../componentes';
import { estáVazio } from '../../utils';

export default function BomPrato() {
  const [bomPrato, setBomPrato] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [erro, setError] = useState(false);

  const buscarUnidades = async () => {
    setCarregando(true);
    setError(false);

    try {
      const bomPrato = await buscarBomPrato();

      setBomPrato(bomPrato);
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

  if (estáVazio(bomPrato?.unidades)) return (
    <Vazio texto="Desculpe, mas nenhuma unidade bom prato foi encontrada no momento." />
  );

  return (
    <Tela>
      <StatusBar style="auto" />
      <Título>{bomPrato?.descrição}</Título>
      <CardsBase unidadesProps={bomPrato?.unidades} />
    </Tela>
  );
}
