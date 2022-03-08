import { Link, Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Link to='four-card-feature'>Four Card</Link>
        <Link to='single-price-grid'>Single Price</Link>
        <Link to='profile-card-1'>Profile Card</Link>
        <Link to='testimonials-grid'>Testimonial's Grid</Link>
      </div>
      <Outlet />
    </>
  );
}
