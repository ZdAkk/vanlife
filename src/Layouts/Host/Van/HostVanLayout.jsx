import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, Outlet, useParams } from "react-router-dom";
import TypeCard from "../../../components/TypeCard";
import HostVanHeader from "../../../components/Host/Van/HostVanHeader";
import { getHostVan } from "../../../api";
import Loading from "../../../pages/Loading";
import Error from "../../../pages/Error";

export default function HostVans() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hostId = 123;

  const fetchVan = useCallback(async () => {
    try {
      const data = await getHostVan(id, hostId);
      setVan(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [id, hostId]);

  useEffect(() => {
    fetchVan();
  }, [fetchVan]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <div className="content-container">
      <Link className="back-to-vans" to=".." relative="path">
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
        <HostVanHeader />
        <Outlet context={{ van }} />
      </div>
    </div>
  );
}
