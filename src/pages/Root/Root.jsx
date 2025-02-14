import { Outlet } from "react-router-dom";
import "./root.scss";

const Root = () => {
  return (
    <div className={"root-page"}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Root;
