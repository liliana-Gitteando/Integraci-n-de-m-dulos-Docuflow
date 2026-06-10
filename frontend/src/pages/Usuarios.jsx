import { useState } from "react";

function Usuarios() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("Administrador");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [showPassword, setShowPassword] = useState(false); // ← Nuevo estado

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

        {/* === CAMPO DE CONTRASEÑA CON ICONO DE OJO === */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Contraseña
          </label>

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese contraseña"
              style={{
                ...inputStyle,
                paddingRight: "45px",   // ← Espacio para el icono
              }}
            />

            {/* Icono SVG del ojo */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                userSelect: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
              }}
            >
              {showPassword ? (
                // Ojo tachado
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#64748b"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908l3.42 3.42M3 3l18 18"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.878 9.878a3 3 0 014.243 4.243"
                  />
                </svg>
              ) : (
                // Ojo normal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#64748b"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5 16.477 5 20.268 7.943 21.542 12 20.268 16.057 16.477 19 12 19 7.523 19 3.732 16.057 2.458 12z"
                  />
                </svg>
              )}
            </span>
          </div>
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