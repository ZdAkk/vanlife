import PropTypes from "prop-types"; // ES6
import Button from "./Button";

export default function VanCard({ van }) {
  function typeToColor(type) {
    return type === "simple"
      ? "orange"
      : type === "rugged"
      ? "swamp"
      : type === "luxury"
      ? "black"
      : "";
  }

  return (
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
      <p className="van-card-description">{van.description}</p>
      <Button color={typeToColor(van.type)}>
        {van.type[0].toUpperCase() + van.type.slice(1)}
      </Button>
    </div>
  );
}

VanCard.propTypes = {
  van: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
