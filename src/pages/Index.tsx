const Index = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F4EEE3",
        color: "#211C15",
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "grid",
        placeItems: "center",
        padding: 28,
      }}
    >
      <section style={{ textAlign: "center" }}>
        <img
          src="/brooker-mark.png"
          alt=""
          style={{ width: 78, height: 78, objectFit: "contain", margin: "0 auto 24px" }}
        />
        <h1
          style={{
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.7rem, 7vw, 5rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          Website coming soon.
        </h1>
      </section>
    </main>
  );
};

export default Index;
