import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Login() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        "http://localhost:7000/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nombre: usuario,
            contrasena: password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.text();

      console.log(data);

      alert("Login correcto");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      setError("Error de usuario o contraseña");

    } finally {

      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#e2e8f0",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            alt="Logo DocuFlow"
            style={{
              width: "120px",
              marginBottom: "20px",
            }}
          />
        </div>

        <h1
          style={{
            textAlign: "center",
            color: "#1e293b",
          }}
        >
          DocuFlow
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#475569",
          }}
        >
          Gestión documental inteligente
        </p>

        <form onSubmit={handleLogin}>

          <div style={{ marginBottom: "20px" }}>

            <label>Usuario</label>

            <input
              type="text"
              placeholder="Ingrese su usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                background: "#f8fafc",
                border: "1px solid #cbd5e1",
                color: "black",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>

            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                background: "#f8fafc",
                border: "1px solid #cbd5e1",
                color: "black",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: loading
                ? "#6b7280"
                : "#1946a3",
              color: "white",
              border: "none",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              marginTop: "10px",
            }}
          >
            {loading
              ? "Iniciando sesión..."
              : "Iniciar Sesión"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;