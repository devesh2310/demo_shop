export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", fontSize: "3rem", textAlign: "center", marginBottom: "40px" }}>
        Welcome to demo_shop
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        
        {/* Product 1 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1520975918318-3e88f1828bea?w=500" alt="T-Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Cool T-Shirt</h2>
          <p>$20</p>
        </div>

        {/* Product 2 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500" alt="Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Stylish Shirt</h2>
          <p>$35</p>
        </div>

        {/* Product 3 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1528701800489-20be0bfbb90d?w=500" alt="Shoes" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Sporty Shoes</h2>
          <p>$50</p>
        </div>

      </div>
    </div>
  );
}
