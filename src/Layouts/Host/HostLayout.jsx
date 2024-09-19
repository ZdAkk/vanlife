import { Outlet } from "react-router-dom";
import HostHeader from "../../components/Host/HostHeader";

export default function Layout() {
  return (
    <>
      <HostHeader />
      <Outlet />
    </>
  );
}
