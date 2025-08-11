import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "20px" }}>
      
      {/* Heading Image */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Image src="/heading.png" alt="Welcome to demo_shop" width={800} height={200} />
      </div>

      {/* Products Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        
        {/* Product 1 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <Image src="/cool_tshirt.png" alt="Cool T-Shirt" width={300} height={300} />
          <h2>Cool T-Shirt</h2>
          <p>$20</p>
        </div>

        {/* Product 2 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <Image src="/stylish_shirt.png" alt="Stylish Shirt" width={300} height={300} />
          <h2>Stylish Shirt</h2>
          <p>$35</p>
        </div>

        {/* Product 3 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <Image src="/sporty_shoes.png" alt="Sporty Shoes" width={300} height={300} />
          <h2>Sporty Shoes</h2>
          <p>$50</p>
        </div>

      </div>
    </div>
  );
}
