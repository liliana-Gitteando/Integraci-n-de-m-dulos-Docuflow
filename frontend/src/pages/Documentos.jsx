import { useEffect, useState } from "react";

export default function Documentos() {

  const [documentos, setDocumentos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {

    fetch("http://localhost:7000/documentos")
      .then((response) => response.json())
      .then((data) => {
        setDocumentos(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  const documentosFiltrados = documentos.filter((doc) =>
    doc.numeroRadicado
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
      <h1>Consulta de Documentos</h1>

      <input
        type="text"
        placeholder="Buscar por número de radicado"
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
          <tr style={{ background: "#1e40af", color: "white" }}>
            <th>Radicado</th>
            <th>Tipo</th>
            <th>Asunto</th>
            <th>Remitente</th>
            <th>Destinatario</th>
            <th>Dependencia</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {documentosFiltrados.map((doc) => (

            <tr
              key={doc.id}
              style={{
                backgroundColor:
                  busqueda &&
                  doc.numeroRadicado
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
                    ? "#dbeafe"
                    : "white"
              }}
            >
              <td>{doc.numeroRadicado}</td>
              <td>{doc.tipoDocumento}</td>
              <td>{doc.asunto}</td>
              <td>{doc.remitente}</td>
              <td>{doc.destinatario}</td>
              <td>{doc.dependencia}</td>
              <td>{doc.estado}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}
