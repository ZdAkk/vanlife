import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="content-container flex-container-center">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Button color="black">
        <Link to="/">Return to home</Link>
      </Button>
    </div>
  );
}
