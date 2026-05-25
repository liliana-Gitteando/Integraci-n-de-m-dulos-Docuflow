import logo from "../assets/logo.jpg";
function Login() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#e2e8f0"
    }}>

      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        width: "350px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
      }}>
        <div style={{ textAlign: "center" }}>
  <img
    src={logo}
        alt="Logo DocuFlow"
        style={{
          width: "120px",
          marginBottom: "20px"
        }}
        />
        </div>

        <h1 style={{
          textAlign: "center",
          color: "#1e293b"
        }}>
          DocuFlow
        </h1>

        <p style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#475569"
        }}>
          Gestión documental inteligente 
        </p>

        <form>

          <div style={{ marginBottom: "20px" }}>
            <label>Correo</label>

            <input
              type="email"
              placeholder="Ingrese su correo"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px"
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Ingrese su contraseña"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px"
              }}
            />
          </div>

          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#1e293b",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Iniciar Sesión
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;