import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout común de las páginas. Mantiene la Navbar y muestra
// el contenido de las rutas hijos mediante Outlet.
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
