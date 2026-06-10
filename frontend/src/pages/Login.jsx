import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      setError("Usuario o contraseña incorrectos");
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
        <h1
          style={{
            textAlign: "center",
            color: "#1e293b",
            marginBottom: "10px",
          }}
        >
          DocuFlow
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#475569",
            marginBottom: "30px",
          }}
        >
          Gestión documental inteligente
        </p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "20px" }}>
            <label>Usuario</label>

            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingrese su usuario"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #cbd5e1",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* === CAMPO DE CONTRASEÑA CON ICONO SVG === */}
          <div style={{ marginBottom: "20px" }}>
            <label>Contraseña</label>

            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                style={{
                  width: "100%",
                  padding: "10px 45px 10px 10px",
                  marginTop: "5px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "5px",
                  boxSizing: "border-box",
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
                  // Ojo tachado (ocultar)
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
                  // Ojo normal (mostrar)
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

          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "10px",
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
              background: loading ? "#64748b" : "#1946a3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer",
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