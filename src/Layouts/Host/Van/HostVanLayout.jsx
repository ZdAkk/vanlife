import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, Outlet, useParams } from "react-router-dom";
import TypeCard from "../../../components/TypeCard";
import HostVanHeader from "../../../components/Host/Van/HostVanHeader";

export default function HostVans() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans[0]);
      })
      .catch((error) => console.error("Error fetching host van: ", error));
  }, [id]);

  return (
    <div className="content-container">
      {van ? (
        <>
          <Link className="back-to-vans" to="/host/vans">
            <IoIosArrowBack />
            <p>Back to all vans</p>
          </Link>
          <div className="host-van-card">
            <div className="host-van-card-general">
              <img
                className="host-van-card-img"
                src={van.imageUrl}
                alt={`Picture of a ${van.name}`}
              />
              <div>
                <TypeCard type={van.type}>
                  {van.type[0].toUpperCase() + van.type.slice(1)}
                </TypeCard>
                <h2>{van.name}</h2>
                <p>
                  <strong>€{van.price}</strong>/day
                </p>
              </div>
            </div>
            <HostVanHeader vanId={id} />
            <Outlet context={van} />
          </div>
        </>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}
