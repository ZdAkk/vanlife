import campervanBackground from "../assets/backgrounds/campervan_background.png";
import TypeCard from "../components/TypeCard";

export default function About() {
  return (
    <div className="content-container">
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <img
        className="about-main-image"
        src={campervanBackground}
        alt="Campervan Image"
      ></img>
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
      <div className="about-bottom-box">
        <h2>Your destination is waiting. Your van is ready.</h2>
        <TypeCard style={{ backgroundColor: "black", color: "white" }}>
          Explore our vans
        </TypeCard>
      </div>
    </div>
  );
}
