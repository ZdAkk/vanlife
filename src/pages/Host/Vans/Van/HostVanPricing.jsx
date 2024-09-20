import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <p className="host-van-card-price">
      <strong>${van.price}</strong>/day
    </p>
  );
}
