import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vans from "./pages/Vans/Vans.jsx";
import Van from "./pages/Vans/Van.jsx";
import Layout from "./Layouts/Layout.jsx";
import HostLayout from "./Layouts/Host/HostLayout.jsx";
import HostDashboard from "./pages/Host/HostDashboard.jsx";
import HostIncome from "./pages/Host/HostIncome.jsx";
import HostReviews from "./pages/Host/HostReviews.jsx";
import HostVans from "./pages/Host/Vans/HostVans.jsx";
import HostVanDetails from "./pages/Host/Vans/Van/HostVanDetails.jsx";
import HostVanPricing from "./pages/Host/Vans/Van/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/Vans/Van/HostVanPhotos.jsx";
import HostVanLayout from "./Layouts/Host/Van/HostVanLayout.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<HostReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
