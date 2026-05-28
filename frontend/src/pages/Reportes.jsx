import Layout from "../components/Layout";

function Reportes() {
  return (
    <Layout>

      <h1 style={{ marginBottom: "20px" }}>
        Reportes
      </h1>

      <h1 style={{ marginBottom: "20px" }}>
        Reportes y Estadísticas
      </h1>

      <form
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >

        {/* FECHA INICIO */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Fecha Inicio
          </label>

          <input
            type="date"
            style={inputStyle}
          />
        </div>

        {/* FECHA FIN */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Fecha Fin
          </label>

          <input
            type="date"
            style={inputStyle}
          />
        </div>

        {/* DEPENDENCIA */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Dependencia
          </label>

          <select style={inputStyle}>
            <option>Seleccione</option>
            <option>Archivo</option>
            <option>Sistemas</option>
            <option>Talento Humano</option>
          </select>
        </div>

        {/* TIPO DOCUMENTO */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Tipo Documento
          </label>

          <select style={inputStyle}>
            <option>Seleccione</option>
            <option>Entrada</option>
            <option>Salida</option>
            <option>Interno</option>
          </select>
        </div>

        {/* ESTADO */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Estado
          </label>

          <select style={inputStyle}>
            <option>Seleccione</option>
            <option>Pendiente</option>
            <option>En Proceso</option>
            <option>Finalizado</option>
          </select>
        </div>

        {/* BOTON */}
        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Generar Reporte
        </button>

      </form>

      {/* TABLA */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >

        <h2 style={{ marginBottom: "20px" }}>
          Resultados Reporte
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
                background: "#2563eb",
                color: "white",
              }}
            >
              <th style={tableStyle}>Radicado</th>
              <th style={tableStyle}>Tipo</th>
              <th style={tableStyle}>Estado</th>
              <th style={tableStyle}>Fecha</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td style={tableStyle}>RAD-E-001</td>
              <td style={tableStyle}>Entrada</td>
              <td style={tableStyle}>Pendiente</td>
              <td style={tableStyle}>25/05/2026</td>
            </tr>

            <tr>
              <td style={tableStyle}>RAD-S-002</td>
              <td style={tableStyle}>Salida</td>
              <td style={tableStyle}>Finalizado</td>
              <td style={tableStyle}>24/05/2026</td>
            </tr>

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

/* INPUTS */
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  background: "#f8fafc",
};

/* GRUPOS */
const groupStyle = {
  marginBottom: "20px",
};

/* TABLA */
const tableStyle = {
  padding: "12px",
  borderBottom: "1px solid #cbd5e1",
  textAlign: "left",
  color: "black",
};

export default Reportes;