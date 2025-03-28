import "./warning.scss";
import warning from "../../assets/icons/warning.svg";
import Image from "../Image/Image";

const Warning = ({ message }) => {
  return (
    <div className="warning">
      <Image className="warning-img" src={warning} />
      <span className="warning-message">{message}</span>
    </div>
  );
};
export default Warning;
