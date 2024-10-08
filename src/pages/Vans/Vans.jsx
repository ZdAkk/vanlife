import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import TypeCard from "../../components/TypeCard";
import { getVans } from "../../api";
import Error from "../Error";
import Loading from "../Loading";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchVans = useCallback(async () => {
    try {
      const data = await getVans();
      setVans(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVans();
  }, [fetchVans]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  const typeFilter = searchParams.get("type");
  const filteredVans = typeFilter
    ? vans.filter((van) => van.type.toUpperCase() === typeFilter.toUpperCase())
    : vans;

  const vansElement = filteredVans?.map((van) => {
    return (
      <Link
        key={van.id}
        to={van.id}
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
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

  function handleFilterChange(key, value) {
    setSearchParams((prevState) => {
      if (value === null) {
        prevState.delete(key);
      } else {
        // search param already exists and the user clicked on the button again to disable it
        if (prevState.get(key) === value) {
          prevState.delete(key);
        } else {
          prevState.set(key, value);
        }
      }
    });
  }

  return (
    <div className="content-container">
      <h1 className="vans-title">Explore our van options</h1>
      <div className="vans-filter-buttons">
        <TypeCard
          onClick={() => handleFilterChange("type", "simple")}
          type={typeFilter === "simple" && typeFilter}
        >
          Simple
        </TypeCard>
        <TypeCard
          onClick={() => handleFilterChange("type", "luxury")}
          type={typeFilter === "luxury" && typeFilter}
        >
          Luxury
        </TypeCard>
        <TypeCard
          onClick={() => handleFilterChange("type", "rugged")}
          type={typeFilter === "rugged" && typeFilter}
        >
          Rugged
        </TypeCard>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="vans-filter-clear"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="vans-container">{vansElement}</div>
    </div>
  );
}
