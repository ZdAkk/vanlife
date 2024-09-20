import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { van } = useOutletContext();

  return (
    <div className="host-van-card-photos">
      <img
        className="host-van-card-photo"
        src={van.imageUrl}
        alt={`Picture of ${van.name}`}
      />
    </div>
  );
}
