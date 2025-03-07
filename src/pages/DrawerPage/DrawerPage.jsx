import Drawer from "../../components/Drawer/Drawer";
import React, { useState } from "react";
import "./drawer-page.scss";
const DrawerPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setDrawerOpen(true)}>Open</button>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}></Drawer>
    </div>
  );
};
export default DrawerPage;
