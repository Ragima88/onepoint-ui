import { Outlet } from "react-router-dom";
import "./root.scss";

const Root = () => {
  return (
    <div className="root-wrapper">
      <div className="root-wrapper-in">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
