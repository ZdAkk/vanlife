import { useOutletContext } from "react-router-dom";

export default function HostVanDetails() {
  const van = useOutletContext();

  return (
    <>
      <p className="host-van-card-details">
        <strong>Name: </strong>
        {van.name}
      </p>
      <p className="host-van-card-details">
        <strong>Category: </strong>
        {van.type}
      </p>
      <p className="host-van-card-details">
        <strong>Description: </strong>
        {van.description}
      </p>
      <p className="host-van-card-details">
        <strong>Visiblity: </strong>Public
      </p>
    </>
  );
}
