import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root/Root";
import PersonalInfoPage from "../pages/PersonalInfoPage/PersonalInfoPage";
import CameFromPage from "../pages/CameFromPage/CameFromPage";
import EmploymentPage from "../pages/EmploymentPage/EmploymentPage";
import AddressPage from "../pages/AddressPage/AddressPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import ConsentPage from "../pages/ConsentPage/ConsentPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PasswordPage from "../pages/PasswordPage/PasswordPage";
import DrawerPage from "../pages/DrawerPage/DrawerPage";
import FinScorePage from "../pages/FinScorePage/FinScorePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/personal-info",
        element: <PersonalInfoPage />,
      },
      {
        path: "/came-from",
        element: <CameFromPage />,
      },
      {
        path: "/employment",
        element: <EmploymentPage />,
      },
      {
        path: "/address",
        element: <AddressPage />,
      },

      {
        path: "/consent",
        element: <ConsentPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/password",
        element: <PasswordPage />,
      },
      {
        path: "/drawer",
        element: <DrawerPage />,
      },
      {
        path: "/fin-score",
        element: <FinScorePage />,
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
