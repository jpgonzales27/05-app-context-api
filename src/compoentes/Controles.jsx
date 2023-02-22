import React, { useContext } from "react";
import styled from "styled-components";
import { ContextoTema } from "../contextos/contextoTema";
/***
 * haciendo uso del hook useContext accedemos a nuestro conexto
 * y podemos usar destructuracion para obtener lo que necesitamos
 * del contexto global para usarlo en nuestro componente
 **/
const Controles = () => {
  const {
    aumentarFuente,
    disminuirFuente,
    alideadoIzquierda,
    alideadoDerecha,
    alideadoCenter,
  } = useContext(ContextoTema);

  return (
    <ContenedorControles>
      <div>
        <Boton onClick={aumentarFuente}>Aumentar Fuente</Boton>
        <Boton onClick={disminuirFuente}>Disminuir Fuente</Boton>
      </div>
      <div>
        <Boton onClick={alideadoIzquierda}>Izquierda</Boton>
        <Boton onClick={alideadoCenter}>Centro</Boton>
        <Boton onClick={alideadoDerecha}>Derecha</Boton>
      </div>
    </ContenedorControles>
  );
};

const ContenedorControles = styled.div`
  margin-top: 20px;
`;

const Boton = styled.button`
  background: #165168;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 7px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;

  &:hover {
    background: #191668;
  }
`;

export default Controles;
