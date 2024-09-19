import Button from "../components/Button";

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <h1 className="home-title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home-description">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Button color="orange" size="lg">
          Find your van
        </Button>
      </div>
    </div>
  );
}
