import Layout from "../components/Layout";

function Alertas() {
  return (
    <Layout>

      <h1 style={{ marginBottom: "20px" }}>
        Gestión de Alertas
      </h1>

      {/* TARJETAS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >

        <div style={cardStyle}>
          <h2 style={{ color: "#dc2626" }}>5</h2>
          <p style={{ color: "#475569" }}>
            Alertas Críticas
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#f59e0b" }}>12</h2>
          <p style={{ color: "#475569" }}>
            Próximas a Vencer
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#2563eb" }}>20</h2>
          <p style={{ color: "#475569" }}>
            Gestionadas
          </p>
        </div>

      </div>

      {/* TABLA ALERTAS */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >

        <h2 style={{ marginBottom: "20px" }}>
          Alertas Activas
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead>
            <tr
              style={{
                background: "#60a5fa",
                color: "white",
              }}
            >
              <th style={tableStyle}>Radicado</th>
              <th style={tableStyle}>Tipo</th>
              <th style={tableStyle}>Prioridad</th>
              <th style={tableStyle}>Vencimiento</th>
              <th style={tableStyle}>Estado</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td style={tableStyle}>RAD-E-001</td>
              <td style={tableStyle}>PQRS</td>
              <td style={{ ...tableStyle, color: "#dc2626" }}>
                Alta
              </td>
              <td style={tableStyle}>26/05/2026</td>
              <td style={tableStyle}>Pendiente</td>
            </tr>

            <tr>
              <td style={tableStyle}>RAD-S-002</td>
              <td style={tableStyle}>Contrato</td>
              <td style={{ ...tableStyle, color: "#f59e0b" }}>
                Media
              </td>
              <td style={tableStyle}>28/05/2026</td>
              <td style={tableStyle}>En Proceso</td>
            </tr>

            <tr>
              <td style={tableStyle}>RAD-I-003</td>
              <td style={tableStyle}>Memorando</td>
              <td style={{ ...tableStyle, color: "#2563eb" }}>
                Baja
              </td>
              <td style={tableStyle}>30/05/2026</td>
              <td style={tableStyle}>Gestionada</td>
            </tr>

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

/* TARJETAS */
const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
};

/* TABLA */
const tableStyle = {
  padding: "12px",
  borderBottom: "1px solid #cbd5e1",
  textAlign: "left",
  color: "black",
};

export default Alertas;