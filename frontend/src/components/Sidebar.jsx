import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#0f172a",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>
      <h2>Menú</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/documentos">Documentos</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/alertas">Alertas</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;