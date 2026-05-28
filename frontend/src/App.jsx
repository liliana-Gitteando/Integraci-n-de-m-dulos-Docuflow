import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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

          <nav>
          <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/radicacion">Radicacion</Link></li>
          <li><Link to="/documentos">Documentos</Link></li>
          <li><Link to="/alertas">Alertas</Link></li>
          <li><Link to="/reportes">Reportes</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          
          </ul>
          </nav>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/documentos" element={<Documentos />} />

        <Route path="/reportes" element={<Reportes />} />

        <Route path="/alertas" element={<Alertas />} />

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/radicacion" element={<Radicacion />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;