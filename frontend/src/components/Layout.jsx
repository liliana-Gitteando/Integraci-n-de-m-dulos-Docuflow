import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO */}
      <div
        style={{
          width: "100%",
          background: "#f1f5f9",
          minHeight: "100vh",
        }}
      >

        {/* HEADER */}
        <div
          style={{
            background: "#1e293b",
            color: "white",
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          DocuFlow - Gestión Documental
        </div>

        {/* PAGINAS */}
        <div style={{ padding: "20px" }}>
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;