import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default AppRouter;
