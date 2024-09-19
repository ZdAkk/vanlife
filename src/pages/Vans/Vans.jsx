import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TypeCard from "../../components/TypeCard";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => {
        console.error("Error fetching Vans data: ", error);
      });
  }, []);

  function vansElement() {
    return vans.map((van) => {
      return (
        <Link key={van.id} to={`/vans/${van.id}`}>
          <div className="van-card">
            <img
              className="van-card-img"
              src={van.imageUrl}
              alt={`Picture of a ${van.name}`}
            />
            <div className="van-card-info">
              <h2>{van.name}</h2>
              <p>
                <strong>€{van.price}</strong>/day
              </p>
            </div>
            <TypeCard type={van.type}>
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </TypeCard>
          </div>
        </Link>
      );
    });
  }

  return (
    <>
      <h1 className="vans-title">Explore our van options</h1>
      <div className="content-container vans-container">{vansElement()}</div>
    </>
  );
}
