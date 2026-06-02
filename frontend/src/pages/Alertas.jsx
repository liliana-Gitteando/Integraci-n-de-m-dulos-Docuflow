import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Alertas() {

  const [alertas, setAlertas] = useState([]);

  useEffect(() => {

    console.log("CONSULTANDO ALERTAS...");

    fetch("http://localhost:7000/alertas")
      .then((response) => response.json())
      .then((data) => {

        console.log("DATOS RECIBIDOS:");
        console.log(data);

        setAlertas(data);

      })
      .catch((error) => {

        console.error("ERROR AL CONSULTAR ALERTAS:");
        console.error(error);

      });

  }, []);

  const alertasCriticas =
    alertas.filter(
      (a) =>
        a.diasRestantes !== null &&
        a.diasRestantes <= 3
    ).length;

  const proximasVencer =
    alertas.filter(
      (a) =>
        a.diasRestantes !== null &&
        a.diasRestantes <= 7
    ).length;

  const gestionadas =
    alertas.filter(
      (a) =>
        a.estado &&
        a.estado.toLowerCase() === "gestionada"
    ).length;

  return (
    <Layout>

      <h1 style={{ marginBottom: "20px" }}>
        Gestión de Alertas
      </h1>

      {/* TARJETAS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >

        <div style={cardStyle}>
          <h2 style={{ color: "#dc2626" }}>
            {alertasCriticas}
          </h2>
          <p style={{ color: "#475569" }}>
            Alertas Críticas
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#f59e0b" }}>
            {proximasVencer}
          </h2>
          <p style={{ color: "#475569" }}>
            Próximas a Vencer
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#2563eb" }}>
            {gestionadas}
          </h2>
          <p style={{ color: "#475569" }}>
            Gestionadas
          </p>
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

        <h2 style={{ marginBottom: "20px", color: "black" }}>
          Alertas Activas
        </h2>

        <div style={{ overflowX: "auto" }}>

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
                <th style={tableStyle}>ID</th>
                <th style={tableStyle}>Tipo</th>
                <th style={tableStyle}>Descripción</th>
                <th style={tableStyle}>Días Restantes</th>
                <th style={tableStyle}>Estado</th>
              </tr>
            </thead>

            <tbody>

              {alertas.length === 0 ? (

                <tr>
                  <td
                    colSpan="5"
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "black",
                    }}
                  >
                    No hay alertas registradas
                  </td>
                </tr>

              ) : (

                alertas.map((alerta) => (

                  <tr key={alerta.id}>

                      <td
                    style={{
                      ...tableStyle,
                      color:
                        alerta.estado === "vencido"
                          ? "#dc2626"
                          : alerta.estado === "pendiente"
                          ? "#f59e0b"
                          : "#16a34a",
                    }}
                  >
                    {alerta.estado}
                  </td>
                    <td style={tableStyle}>
                      {alerta.tipoAlerta}
                    </td>

                    <td style={tableStyle}>
                      {alerta.descripcion}
                    </td>

                    <td style={tableStyle}>
                      {alerta.diasRestantes}
                    </td>

                    <td style={tableStyle}>
                      {alerta.estado}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

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

{
  alerta.fechaCreacion
    ? new Date(alerta.fechaCreacion)
        .toLocaleDateString("es-CO")
    : ""
}

/* TABLA */
const tableStyle = {
  padding: "12px",
  borderBottom: "1px solid #cbd5e1",
  textAlign: "left",
  color: "black",
};

export default Alertas;