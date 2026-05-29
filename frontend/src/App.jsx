import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Documentos from "./pages/Documentos";
import Reportes from "./pages/Reportes";
import Alertas from "./pages/Alertas";
import Usuarios from "./pages/Usuarios";
import Radicacion from "./pages/Radicacion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Login />} />

        {/* Rutas protegidas (por ahora abiertas) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/radicacion" element={<Radicacion />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;