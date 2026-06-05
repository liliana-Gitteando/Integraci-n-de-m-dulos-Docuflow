import { useEffect, useState } from "react";

export default function Alertas() {

  const [alertas, setAlertas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {

    fetch("http://localhost:7000/alertas")
      .then((response) => response.json())
      .then((data) => {
        setAlertas(data);
      })
      .catch((error) => {
        console.error("Error cargando alertas:", error);
      });

  }, []);

  const alertasFiltradas = alertas.filter((alerta) =>
    alerta.descripcion
      ?.toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        background: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <h1>Gestión de Alertas</h1>

      <input
        type="text"
        placeholder="Buscar por descripción"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: "400px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white"
        }}
      >
        <thead>
          <tr
            style={{
              background: "#1e40af",
              color: "white"
            }}
          >
            <th>ID</th>
            <th>Documento</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Fecha Notificación</th>
            <th>Fecha Límite</th>
            <th>Días Restantes</th>
            <th>PQRS</th>
          </tr>
        </thead>

        <tbody>

          {alertasFiltradas.map((alerta) => (

           <tr
            key={alerta.id}
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid #e5e7eb"
            }}
          >
              <td>{alerta.id}</td>

              <td>{alerta.documentoId}</td>

              <td>{alerta.tipoAlerta}</td>

              <td>{alerta.descripcion}</td>

    <td>
    <span
      style={{
      padding: "4px 10px",
      borderRadius: "10px",
      fontWeight: "bold",
      backgroundColor:
        alerta.estado?.toLowerCase() === "pendiente"
          ? "#fef3c7"
          : alerta.estado?.toLowerCase() === "vencido"
          ? "#fee2e2"
          : alerta.estado?.toLowerCase() === "atendida"
          ? "#dcfce7"
          : "#f3f4f6",
      color:
        alerta.estado?.toLowerCase() === "pendiente"
          ? "#ffd200"
          : alerta.estado?.toLowerCase() === "vencido"
          ? "#b91c1c"
          : alerta.estado?.toLowerCase() === "atendida"
          ? "#86EFAC"
          : "#111827"
    }}
  >
    {alerta.estado}
  </span>
</td>

              <td>
                {alerta.fechaNotificacion
                  ? new Date(alerta.fechaNotificacion).toLocaleDateString()
                  : ""}
              </td>

              <td>
                {alerta.fechaLimiteRespuesta
                  ? new Date(alerta.fechaLimiteRespuesta).toLocaleDateString()
                  : ""}
              </td>

              <td>{alerta.diasRestantes}</td>

              <td>
                {alerta.esPqrs ? "Sí" : "No"}
              </td>

            </tr>

          ))}

        </tbody>
      </table>
    </div>
  );
}