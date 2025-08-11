import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#FFD700",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Heading Image */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Image
          src="https://raw.githubusercontent.com/devesh-ai/demo_assets/main/welcome_heading.png"
          alt="Welcome to demo_shop"
          width={800}
          height={200}
        />
      </div>

      {/* Products */}
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
            src="https://raw.githubusercontent.com/devesh-ai/demo_assets/main/cool_tshirt.png"
            alt="Cool T-Shirt"
            width={300}
            height={300}
          />
          <h2>Cool T-Shirt</h2>
          <p>$20</p>
        </div>

        {/* Product 2 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <Image
            src="https://raw.githubusercontent.com/devesh-ai/demo_assets/main/graphic_tshirt.png"
            alt="Graphic T-Shirt"
            width={300}
            height={300}
          />
          <h2>Graphic T-Shirt</h2>
          <p>$25</p>
        </div>

        {/* Product 3 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <Image
            src="https://raw.githubusercontent.com/devesh-ai/demo_assets/main/stylish_shirt.png"
            alt="Stylish Shirt"
            width={300}
            height={300}
          />
          <h2>Stylish Shirt</h2>
          <p>$35</p>
        </div>

        {/* Product 4 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <Image
            src="https://raw.githubusercontent.com/devesh-ai/demo_assets/main/formal_shirt.png"
            alt="Formal Shirt"
            width={300}
            height={300}
          />
          <h2>Formal Shirt</h2>
          <p>$40</p>
        </div>

        {/* Product 5 */}
        <div style={{ backgroundColor: "#111", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
          <Image
            src="https://raw.githubusercontent.com/devesh-ai/demo_assets/main/casual_shirt.png"
            alt="Casual Shirt"
            width={300}
            height={300}
