const NotFound = () => (
  <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#F6F6F1", color: "#1A1C20", fontFamily: "Inter, system-ui, sans-serif", textAlign: "center" }}>
    <div>
      <h1 style={{ margin: "0 0 12px", fontSize: "3rem" }}>404</h1>
      <p style={{ margin: "0 0 20px", color: "#59616A", fontSize: "1.15rem" }}>Page not found</p>
      <a href="/" style={{ color: "#B64A22", fontWeight: 700 }}>Return home</a>
    </div>
  </main>
);

export default NotFound;
