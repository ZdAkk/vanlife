import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      })
      .catch((error) => console.error("Error fetching host vans: ", error));
  }, []);

  const vansElement = vans.map((van) => {
    return (
      <div key={van.id} className="host-van-mini-card">
        <img
          className="host-van-mini-card-img"
          src={van.imageUrl}
          alt={`Picture of a ${van.name}`}
        />
        <div className="host-van-mini-card-info">
          <Link to={`/host/vans/${van.id}`}>
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
      <div className="host-vans-container">
        {vans.length !== 0 ? vansElement : <h2>Loading ...</h2>}
      </div>
    </div>
  );
}
