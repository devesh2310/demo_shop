export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        fontSize: "3rem",
        textAlign: "center",
        marginBottom: "40px"
      }}>
        Welcome to demo_shop
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        
        {/* T-Shirts */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=80" alt="Cool T-Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Cool T-Shirt</h2>
          <p>$20</p>
        </div>

        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d6?w=500&auto=format&fit=crop&q=80" alt="Graphic T-Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Graphic T-Shirt</h2>
          <p>$25</p>
        </div>

        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1520975918318-3e88f1828bea?w=500&auto=format&fit=crop&q=80" alt="Stylish Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Stylish Shirt</h2>
          <p>$35</p>
        </div>

        {/* Shirts */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=80" alt="Formal Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Formal Shirt</h2>
          <p>$40</p>
        </div>

        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80" alt="Casual Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Casual Shirt</h2>
          <p>$30</p>
        </div>

        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1600185365926-3a2ce0b65a91?w=500&auto=format&fit=crop&q=80" alt="Checked Shirt" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Checked Shirt</h2>
          <p>$32</p>
        </div>

        {/* Shoes */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1528701800489-20be0bfbb90d?w=500&auto=format&fit=crop&q=80" alt="Sporty Shoes" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Sporty Shoes</h2>
          <p>$50</p>
        </div>

        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1600180758890-6d816bb35c58?w=500&auto=format&fit=crop&q=80" alt="Running Shoes" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Running Shoes</h2>
          <p>$55</p>
        </div>

        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <img src="https://images.unsplash.com/photo-1614288666745-427fe5b99c87?w=500&auto=format&fit=crop&q=80" alt="Sneakers" width="300" height="300" style={{ borderRadius: "8px" }} />
          <h2>Sneakers</h2>
          <p>$45</p>
        </div>

      </div>
    </div>
  );
}
