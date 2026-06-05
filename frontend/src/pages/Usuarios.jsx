function Usuarios() {
  return (
    <>

      <h1 style={{ marginBottom: "20px" }}>
        Gestión de Usuarios
      </h1>

      <form
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >

        {/* NOMBRE */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
          Nombre Completo
          </label>

          <input
            type="text"
            placeholder="Ingrese nombre"
            style={inputStyle}
          />
        </div>

        {/* CORREO */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Correo Electrónico
          </label>
          

          <input
            type="email"
            placeholder="Ingrese correo"
            style={inputStyle}
          />
        </div>

        {/* ROL */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Rol
          </label>
          

          <select style={inputStyle}>
            <option>Administrador</option>
            <option>Radicador</option>
            <option>Archivista</option>
            <option>Funcionario</option>
          </select>
        </div>

        {/* PASSWORD */}
        <div style={groupStyle}>
          <label style={{ color: "black" }}>
            Contraseña
          </label>
          

          <input
            type="password"
            placeholder="Ingrese contraseña"
            style={inputStyle}
          />
        </div>

        {/* ESTADO */}
        <div style={groupStyle}>
         <label style={{ color: "black" }}>
            Estado
          </label>
          

          <select style={inputStyle}>
            <option>Activo</option>
            <option>Inactivo</option>
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
          Guardar Usuario
        </button>

      </form>

    </>
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
   color: "black",
};

/* GRUPOS */
const groupStyle = {
  marginBottom: "20px",
};

export default Usuarios;