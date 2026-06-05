import { useEffect, useState } from "react";


function Reportes() {

  const [reportes, setReportes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    fetch("http://localhost:7000/reportes")
      .then((response) => {

        if (!response.ok) {
          throw new Error("Error al obtener reportes");
        }

        return response.json();
      })
      .then((data) => {

        console.log("REPORTES RECIBIDOS:");
        console.log(data);

        setReportes(data || []);
        setCargando(false);

      })
      .catch((error) => {

        console.error("ERROR:");
        console.error(error);

        setReportes([]);
        setCargando(false);

      });

  }, []);

  return (
    <>

      <h1 style={{ marginBottom: "20px" }}>
        Reportes y Estadísticas
      </h1>

      {/* FILTROS */}
      <form
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Fecha Inicio
          </label>

          <input
            type="date"
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Fecha Fin
          </label>

          <input
            type="date"
            style={inputStyle}
          />
        </div>

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

        <button
          type="button"
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

        <h2
          style={{
            marginBottom: "20px",
            color: "black",
          }}
        >
          Reportes Generados
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
                  background: "#2563eb",
                  color: "white",
                }}
              >
                <th style={tableStyle}>ID</th>
                <th style={tableStyle}>Tipo Reporte</th>
                <th style={tableStyle}>Descripción</th>
                <th style={tableStyle}>Formato</th>
                <th style={tableStyle}>Usuario</th>
                <th style={tableStyle}>Fecha Generación</th>
              </tr>
            </thead>

            <tbody>

              {cargando ? (

                <tr>
                  <td
                    colSpan="6"
                    style={tableStyle}
                  >
                    Cargando reportes...
                  </td>
                </tr>

              ) : reportes.length === 0 ? (

                <tr>
                  <td
                    colSpan="6"
                    style={tableStyle}
                  >
                    No existen reportes
                  </td>
                </tr>

              ) : (

                reportes.map((reporte) => (

                  <tr key={reporte.id}>

                    <td style={tableStyle}>
                      {reporte.id}
                    </td>

                    <td style={tableStyle}>
                      {reporte.tipoReporte}
                    </td>

                    <td style={tableStyle}>
                      {reporte.descripcion}
                    </td>

                    <td style={tableStyle}>
                      {reporte.formato}
                    </td>

                    <td style={tableStyle}>
                      {reporte.usuarioId}
                    </td>

                    <td style={tableStyle}>
                      {reporte.fechaGeneracion
                        ? new Date(
                            reporte.fechaGeneracion
                          ).toLocaleDateString("es-CO")
                        : "Sin fecha"}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  background: "#f8fafc",
};

const groupStyle = {
  marginBottom: "20px",
};

const tableStyle = {
  padding: "12px",
  borderBottom: "1px solid #cbd5e1",
  textAlign: "left",
  color: "black",
};

export default Reportes;