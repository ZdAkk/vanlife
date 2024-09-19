import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TypeCard from "../../components/TypeCard";
import Button from "../../components/Button";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Van() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      })
      .catch((error) => console.error("Error Fetching Van Data: ", error));
  }, [params.id]);

  return (
    <div className="content-container van-container">
      {van ? (
        <div className="van-card">
          <Link className="back-to-vans" to="/vans">
            <IoIosArrowRoundBack />
            <p>Back to all vans</p>
          </Link>
          <img
            className="van-card-img"
            src={van.imageUrl}
            alt={`Picture of a ${van.name}`}
          />
          <TypeCard type={van.type}>
            {van.type[0].toUpperCase() + van.type.slice(1)}
          </TypeCard>
          <div className="van-card-info">
            <h2>{van.name}</h2>
            <p>
              <strong>€{van.price}</strong>/day
            </p>
          </div>
          <p className="van-card-description">{van.description}</p>
          <Button>Rent this van</Button>
        </div>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}
