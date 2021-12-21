import { IoArrowUpCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <IoArrowUpCircleOutline size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
