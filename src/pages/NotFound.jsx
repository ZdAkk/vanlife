import { Link } from "react-router-dom";
import Button from "../components/Button";
import { TbError404Off } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="content-container flex-container-center">
      <TbError404Off size={"10em"} />
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Button color="black">
        <Link to="/">Return to home</Link>
      </Button>
    </div>
  );
}
