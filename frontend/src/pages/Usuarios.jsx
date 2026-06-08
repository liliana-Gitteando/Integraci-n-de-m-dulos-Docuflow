import { useState } from "react";

function Usuarios() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("Administrador");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState("Activo");

  const guardarUsuario = async (e) => {
    e.preventDefault();

    const usuario = {
  nombre,
  rol,
  contrasena: password
};

    try {
      const response = await fetch(
        "http://localhost:7000/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(usuario)
        }
      );

      if (response.ok) {
        alert("Usuario guardado correctamente");

        setNombre("");
        setCorreo("");
        setRol("Administrador");
        setPassword("");
        setEstado("Activo");
      } else {
        alert("Error al guardar usuario");
      }

    } catch (error) {
      console.error(error);
      alert("No se pudo conectar al servidor");
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>
        Gestión de Usuarios
      </h1>

      <form
        onSubmit={guardarUsuario}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Nombre Completo
          </label>

          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese nombre"
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Correo Electrónico
          </label>

          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingrese correo"
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Rol
          </label>

          <select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            style={inputStyle}
          >
            <option>Administrador</option>
            <option>Radicador</option>
            <option>Archivista</option>
            <option>Funcionario</option>
          </select>
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Contraseña
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese contraseña"
            style={inputStyle}
          />
        </div>

        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Estado
          </label>

          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            style={inputStyle}
          >
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

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
          Guardar Usuario
        </button>

      </form>
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
  color: "black",
};

const groupStyle = {
  marginBottom: "20px",
};

export default Usuarios;