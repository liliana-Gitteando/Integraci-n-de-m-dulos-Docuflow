import Layout from "../components/Layout";

function Dashboard() {
  return (
    <Layout>

      <h1 style={{ marginBottom: "20px" }}>
        Dashboard DocuFlow
      </h1>

      {/* TARJETAS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >

        <div style={cardStyle}>
          <h2 style={{ color: "black" }}>120</h2>
          <p style={{ color: "#475569" }}>Documentos</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "black" }}>35</h2>
          <p style={{ color: "#475569" }}>Radicados hoy</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#dc2626" }}>8</h2>
          <p style={{ color: "#475569" }}>Alertas activas</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "black" }}>15</h2>
          <p style={{ color: "#475569" }}>Usuarios</p>
        </div>

      </div>

      {/* TABLA */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >

        <h2>Documentos recientes</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >

          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={tableStyle}>Radicado</th>
              <th style={tableStyle}>Tipo</th>
              <th style={tableStyle}>Estado</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td style={tableStyle}>RAD-E-2026-05-0000001</td>
              <td style={tableStyle}>Entrada</td>
              <td style={tableStyle}>Pendiente</td>
            </tr>

            <tr>
              <td style={tableStyle}>RAD-S-2026-05-0000002</td>
              <td style={tableStyle}>Salida</td>
              <td style={tableStyle}>Finalizado</td>
            </tr>

            <tr>
              <td style={tableStyle}>RAD-I-2026-05-0000003</td>
              <td style={tableStyle}>Interno</td>
              <td style={tableStyle}>En Proceso</td>
            </tr>

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

/* ESTILO TARJETAS */
const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
};

/* ESTILO TABLA */
const tableStyle = {
  padding: "12px",
  borderBottom: "1px solid #cbd5e1",
  textAlign: "left",
  color: "black",
};

export default Dashboard;