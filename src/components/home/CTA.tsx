export default function CTA() {
  return (
    <>
      {/* CTA SECTION */}
      <section
        style={{
          width: "min(96vw, 1320px)",
          margin: "60px auto 80px",
          padding: "0 10px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "24px",
            padding: "50px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              left: "-100px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              filter: "blur(60px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              right: "-100px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              filter: "blur(60px)",
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "white", marginBottom: "12px" }}>
              Ready to Build Something Amazing?
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.95)",
                marginBottom: "28px",
                maxWidth: "600px",
                margin: "0 auto 28px",
              }}
            >
              Let&apos;s discuss your project and create a digital solution that drives results
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "14px 32px",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: "999px",
                  background: "white",
                  color: "#667eea",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 30px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
                }}
              >
                Get Started Today
              </button>

              <button
                style={{
                  padding: "14px 32px",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: "999px",
                  background: "transparent",
                  color: "white",
                  border: "2px solid white",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}