import { useState } from "react";

function Radicacion() {

  const [tipoDocumento, setTipoDocumento] = useState("");
  const [asunto, setAsunto] = useState("");
  const [remitente, setRemitente] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [fechaRadicacion, setFechaRadicacion] = useState("");
  const [dependencia, setDependencia] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const documento = {
      tipoDocumento,
      asunto,
      remitente,
      destinatario,
      fechaRadicacion,
      dependencia,
      observaciones,
      usuarioId: 1
    };

    try {

      const response = await fetch(
        "http://localhost:7000/documentos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(documento)
        }
      );

      const mensaje = await response.text();

      if (response.ok) {
        alert(mensaje);
      } else {
        alert("Error: " + mensaje);
      }

    } catch (error) {

      console.error(error);
      alert("No fue posible conectar con el servidor");
    }
  };

  return (
  <div>

      <h1 style={{ marginBottom: "20px" }}>
        Radicación de Documentos
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Tipo de Documento
          </label>

          <select
            style={inputStyle}
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
          >
            <option value="">Seleccione</option>
            <option value="E">Entrada</option>
            <option value="S">Salida</option>
            <option value="I">Interno</option>
          </select>
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Asunto
          </label>

          <input
            type="text"
            placeholder="Ingrese el asunto"
            style={inputStyle}
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Remitente
          </label>

          <input
            type="text"
            placeholder="Ingrese remitente"
            style={inputStyle}
            value={remitente}
            onChange={(e) => setRemitente(e.target.value)}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Destinatario
          </label>

          <input
            type="text"
            placeholder="Ingrese destinatario"
            style={inputStyle}
            value={destinatario}
            onChange={(e) => setDestinatario(e.target.value)}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Ingrese fecha
          </label>

          <input
            type="date"
            style={inputStyle}
            value={fechaRadicacion}
            onChange={(e) => setFechaRadicacion(e.target.value)}
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
            value={dependencia}
            onChange={(e) => setDependencia(e.target.value)}
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
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
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

      </div>
);
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  background: "#f8fafc",
  color: "black",
};

const groupStyle = {
  marginBottom: "20px",
};

export default Radicacion;