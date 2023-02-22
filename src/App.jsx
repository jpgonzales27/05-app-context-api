import React, { useContext } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import AcercaDe from "./compoentes/AcercaDe";
import Blog from "./compoentes/Blog";
import PaginaInicio from "./compoentes/PaginaInicio";
import styled from "styled-components";
import Post from "./compoentes/Post";
import Error404 from "./compoentes/Error404";
import { ContextoTema } from "./contextos/contextoTema";

const App = () => {
  /***
   * haciendo uso del hook useContext accedemos a nuestro conexto
   * y podemos usar destructuracion para obtener lo que necesitamos
   * del contexto global para usarlo en nuestro componente
   **/
  const { tema } = useContext(ContextoTema);

  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header>
          <Titulo>Mi blog personal</Titulo>
          <Menu>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
          </Menu>
        </Header>
        {/**
         * podemos pasa propiedades a nuestros styled components
         */}
        <Main tema={tema}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<PaginaInicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

/**
 * Podemos acceder a las props en nuestros styled components y modificar
 * los valores accediendo a nuestro conxteto
 **/
const Main = styled.main`
  font-size: ${(props) => (props.tema ? props.tema.fuente + "px" : "16px")};
  text-align: ${(props) => (props.tema ? props.tema.alineado : "right")};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }

  a:hover {
    color: #191681;
  }

  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

export default App;
