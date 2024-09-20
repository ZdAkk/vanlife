import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import TypeCard from "../../components/TypeCard";
import Button from "../../components/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { getVan } from "../../api";
import Loading from "../Loading";
import Error from "../Error";

export default function Van() {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVan = useCallback(async () => {
    try {
      const data = await getVan(params.id);
      setVan(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchVan();
  }, [fetchVan]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  const searchParams = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="content-container van-container">
      <div className="van-card">
        <Link
          className="back-to-vans"
          to={`..?${searchParams}`}
          relative="path"
        >
          <IoIosArrowRoundBack />
          <p>Back to {type} vans</p>
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
    </div>
  );
}
