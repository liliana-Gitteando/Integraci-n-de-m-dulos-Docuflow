import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Radicacion from "./pages/Radicacion";
import Documentos from "./pages/Documentos";
import Alertas from "./pages/Alertas";
import Reportes from "./pages/Reportes";
import Usuarios from "./pages/Usuarios";

import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/radicacion"
          element={
            <Layout>
              <Radicacion />
            </Layout>
          }
        />

        <Route
          path="/documentos"
          element={
            <Layout>
              <Documentos />
            </Layout>
          }
        />

        <Route
          path="/alertas"
          element={
            <Layout>
              <Alertas />
            </Layout>
          }
        />

        <Route
          path="/reportes"
          element={
            <Layout>
              <Reportes />
            </Layout>
          }
        />

        <Route
          path="/usuarios"
          element={
            <Layout>
              <Usuarios />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;