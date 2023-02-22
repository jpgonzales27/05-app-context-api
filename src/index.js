import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProovedorTema } from "./contextos/contextoTema";
/**
 * Para usar ContextApi al igual q ue react.router o redux
 * debemos envolver nuestro componente princial(App) en un
 * componente Proveerdor
 *
 * Esta componente lo creamos nosotrs en el archivo conxtetoTema
 * y lo exportanmos con el nombre ProovedorTema
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProovedorTema>
      <App />
    </ProovedorTema>
  </React.StrictMode>
);
