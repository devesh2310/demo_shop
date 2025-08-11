import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "20px" }}>
      <h1
        style={{
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "40px",
          textShadow: "2px 2px 8px #444",
        }}
      >
        Welcome to demo_shop
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Product 1 */}
        <div
          style={{
            backgroundColor: "#111",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1602810318383-6c84e51bcd7f?auto=format&fit=crop&w=800&q=80"
            alt="Black & Gold T-Shirt"
            width={300}
            height={300}
          />
          <h2>Black & Gold T-Shirt</h2>
          <p>$29.99</p>
        </div>

        {/* Product 2 */}
        <div
          style={{
            backgroundColor: "#111",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1520975922071-ae6f9e62d9f4?auto=format&fit=crop&w=800&q=80"
            alt="Black & Gold Shirt"
            width={300}
            height={300}
          />
          <h2>Black & Gold Shirt</h2>
          <p>$39.99</p>
        </div>

        {/* Product 3 */}
        <div
          style={{
            backgroundColor: "#111",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1606813902798-d3a2a1069a6b?auto=format&fit=crop&w=800&q=80"
            alt="Black & Gold Sneakers"
            width={300}
            height={300}
          />
          <h2>Black & Gold Sneakers</h2>
          <p>$59.99</p>
        </div>
      </div>
    </div>
  );
}
