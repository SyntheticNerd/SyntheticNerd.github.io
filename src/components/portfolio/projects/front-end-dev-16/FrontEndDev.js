import { Link } from "react-router-dom";
import { FrontEndDevArr } from "../../PortfolioStyles";

export default function FrontEndDev() {
  return (
    <>
      <FrontEndDevArr>
        <Link to='four-card-feature'>Four Card</Link>
        <Link to='single-price-grid'>Single Price</Link>
        <Link to='profile-card-1'>Profile Card</Link>
        <Link to='testimonials-grid'>Testimonial's Grid</Link>
        <Link to='base-apparel'>Base Apparel Coming Soon</Link>
      </FrontEndDevArr>
    </>
  );
}
