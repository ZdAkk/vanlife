import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../../api";
import Loading from "../../Loading";
import Error from "../../Error";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hostId = 123;

  const fetchVans = useCallback(async () => {
    try {
      const data = await getHostVans(hostId);
      setVans(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [hostId]);

  useEffect(() => {
    fetchVans();
  }, [fetchVans]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  const vansElement = vans.map((van) => {
    return (
      <div key={van.id} className="host-van-mini-card">
        <img
          className="host-van-mini-card-img"
          src={van.imageUrl}
          alt={`Picture of a ${van.name}`}
        />
        <div className="host-van-mini-card-info">
          <Link to={van.id}>
            <h2>{van.name}</h2>
          </Link>
          <p>
            <strong>€{van.price}</strong>/day
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="content-container">
      <h2>Your listed vans</h2>
      <div className="host-vans-container">{vansElement}</div>
    </div>
  );
}
