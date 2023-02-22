import React, { useState } from "react";

/**
 * Creamos el contexto que almacenara nuestro estado global
 */
const ContextoTema = React.createContext();

/**
 * ProoverdorTema es el encargado de compartir y modificar nuestro
 * estado global en al aplicacion
 *
 * recibe la propiedad children que hace referencia a todos los chijos dentro
 * de nuestro Provider podran compartir y usar nuestro estado global
 */
const ProovedorTema = ({ children }) => {
  /**
   * una ventaja del ContextApi es que podemos usar hooks de react
   * como useState para crear estados y funciones para modificar el mismo
   * las cuales se compartiran de manera global en todos
   * los compomentes de nuesta aplicacion
   */
  const [tema, setTema] = useState({ alineado: "center", fuente: 20 });

  /**
   * Como nuestro useState lo estamo inicializanod con un objeto
   * entonces para modificarlo siempre hacemos una copia del mismo
   * y luego agregamos el valor a modificar
   */
  const aumentarFuente = () =>
    setTema({
      ...tema,
      fuente: tema.fuente + 1,
    });

  const disminuirFuente = () =>
    setTema({
      ...tema,
      fuente: tema.fuente - 1,
    });

  const alideadoIzquierda = () =>
    setTema({
      ...tema,
      alineado: "left",
    });

  const alideadoDerecha = () =>
    setTema({
      ...tema,
      alineado: "right",
    });

  const alideadoCenter = () =>
    setTema({
      ...tema,
      alineado: "center",
    });

  /**
     * Finalmente para compartir nuestro contexto global, nuestro estado y las
     * funciones que creamos dentro de nuestro proovedor debemos hacerlos a traves
     * de value={} el cual recibe un objeto con todo lo que queremos compartir de
     * manera global para que sean accedidos desde nuestros componentes
     *
     * EL {children} es para que nuestro provider muestro todos nuestros componentes
     * despues que envolvismo al componente App con nuestro Prooverdor
     *
     *  <ProovedorTema>
            <App />
        </ProovedorTema>
     */
  return (
    <ContextoTema.Provider
      value={{
        tema,
        aumentarFuente,
        disminuirFuente,
        alideadoIzquierda,
        alideadoDerecha,
        alideadoCenter,
      }}
    >
      {children}
    </ContextoTema.Provider>
  );
};

export { ContextoTema, ProovedorTema };
