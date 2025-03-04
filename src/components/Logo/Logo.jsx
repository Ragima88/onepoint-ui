import "./logo.scss";
import logo from "../../assets/images/OnePoint Logo.png";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link className="logo-link" to={"/"}>
      <Image className="logo" src={logo} />
    </Link>
  );
};
export default Logo;
