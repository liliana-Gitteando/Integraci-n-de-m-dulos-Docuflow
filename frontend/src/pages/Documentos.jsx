import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function Documentos() {

  const [documentos, setDocumentos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    cargarDocumentos();
  }, []);

  const cargarDocumentos = async () => {

    try {

      const response = await fetch(
        "http://localhost:7000/documentos"
      );

      const data = await response.json();

      setDocumentos(data);

    } catch (error) {

      console.error(error);
      alert("Error al cargar documentos");
    }
  };

  const documentosFiltrados = documentos.filter((doc) =>
    doc.numeroRadicado
      ?.toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <Layout>

      <h1 style={{ marginBottom: "20px" }}>
        Consultar Documentos
      </h1>

      <h2>PRUEBA GIT DOCUMENTOS</h2>

      <input
        type="text"
        placeholder="Buscar por radicado"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          border: "1px solid #cbd5e1",
          borderRadius: "6px",
          color: "black",
          background: "white",
          color: "black",
        }}
      />

      <div
        style={{
          overflowX: "auto",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>

            <tr>

              <th style={thStyle}>Radicado</th>

              <th style={thStyle}>Tipo</th>

              <th style={thStyle}>Asunto</th>

              <th style={thStyle}>Remitente</th>

              <th style={thStyle}>Destinatario</th>

              <th style={thStyle}>Dependencia</th>

              <th style={thStyle}>Estado</th>

            </tr>

          </thead>

          <tbody>

            {documentosFiltrados.map((doc) => (

              <tr key={doc.id}>

                <td style={tdStyle}>
                  {doc.numeroRadicado}
                </td>

                <td style={tdStyle}>
                  {doc.tipoDocumento}
                </td>

                <td style={tdStyle}>
                  {doc.asunto}
                </td>

                <td style={tdStyle}>
                  {doc.remitente}
                </td>

                <td style={tdStyle}>
                  {doc.destinatario}
                </td>

                <td style={tdStyle}>
                  {doc.dependencia}
                </td>

                <td style={tdStyle}>
                  {doc.estado}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

/* GRUPOS */
const thStyle = {
  border: "1px solid #cbd5e1",
  padding: "12px",
  background: "#1946a3",
  color: "white",
};

const tdStyle = {
  border: "1px solid #cbd5e1",
  padding: "10px",
  color: "black",
};

export default Documentos;