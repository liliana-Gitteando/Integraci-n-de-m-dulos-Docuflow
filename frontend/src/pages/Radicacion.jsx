import Layout from "../components/Layout";

function Radicacion() {
  return (
    <Layout>

      <h1 style={{ marginBottom: "20px" }}>
        Radicación de Documentos
      </h1>

      <form
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >

        {/* TIPO DOCUMENTO */}
        <div style={groupStyle}>
         <label style={{ color: "black" }}>
            Tipo de Documento
          </label>
      
          <select style={inputStyle}>
            <option>Seleccione</option>
            <option>Entrada</option>
            <option>Salida</option>
            <option>Interno</option>
          </select>
        </div>

        {/* ASUNTO */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Asunto
          </label>

          <input
            type="text"
            placeholder="Ingrese el asunto"
            style={inputStyle}
          />
        </div>

        {/* REMITENTE */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Remitente
          </label>

          <input
            type="text"
            placeholder="Ingrese remitente"
            style={inputStyle}
          />
        </div>

        {/* DESTINATARIO */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Destinatario
          </label>

          <input
            type="text"
            placeholder="Ingrese destinatario"
            style={inputStyle}
          />
        </div>

        {/* FECHA */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Ingrese fecha
          </label>

          <input
            type="date"
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Prioridad
          </label>

          <select style={inputStyle}>
            <option>Seleccione</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>

          <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Dependencia
          </label>

          <input
            type="text"
            placeholder="Ingrese dependencia"
            style={inputStyle}
          />
        </div>

          <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Medio de Recepción
          </label>

          <select style={inputStyle}>
            <option>Seleccione</option>
            <option>Correo Electrónico</option>
            <option>Físico</option>
            <option>Ventanilla</option>
            <option>Interno</option>
          </select>
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Observaciones
          </label>

          <textarea
            placeholder="Ingrese observaciones"
            style={{
              ...inputStyle,
              height: "100px",
            }}
          />
        </div>

        <div style={groupStyle}>
            <label style={{ color: "black" }}>
              Adjuntar Documento
            </label>

            <input
              type="file"
              style={inputStyle}
            />
         </div>

        {/* BOTON */}
        <button
          type="submit"
          style={{
            background: "#1946a3",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Radicar Documento
        </button>

      </form>

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

export default Radicacion;