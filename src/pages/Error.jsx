import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { MdError } from "react-icons/md";

export default function Error({ errorMessage }) {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(0); // Refresh the route within the SPA without a full reload
  };

  return (
    <div className="content-container flex-container-center">
      <MdError size="10em" />
      <h1 className="error-title">
        There&apos;s an issue and the page could not be loaded.
      </h1>
      <p>{errorMessage}</p>
      <Button onClick={handleRetry}>Reload page</Button>
    </div>
  );
}
