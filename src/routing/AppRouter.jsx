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
import RejectPage from "../pages/RejectPage/RejectPage";
import EmailPage from "../pages/EmailPage/EmailPage";
import EmailOtpPage from "../pages/EmailOtpPage/EmailOtpPage";
import PhonePage from "../pages/PhonePage/PhonePage";
import PhoneOtpPage from "../pages/PhoneOtpPage/PhoneOtpPage";
import KYCPage from "../pages/KYCPage/KYCPage";
import LoanPage from "../pages/LoanPage/LoanPage";
import PurposePage from "../pages/PurposePage/PurposePage";
import CardPage from "../pages/CardPage/CardPage";
import WaitingPage from "../pages/WaitingPage/WaitingPage";
import SimaConsentPage from "../pages/SimaConsentPage/SimaConsentPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import OfferPage from "../pages/OfferPage/OfferPage";
import InfoCheckPage from "../pages/InfoCheckPage/InfoCheckPage";
import SimaSignPage from "../pages/SimaSignPage/SimaSignPage";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ErrorPage from "../pages/ErrorPage/Error-page";
import LoanPage2 from "../pages/LoanPage2/LoanPage2";
import LoanPage3 from "../pages/LoanPage3/LoanPage3";
import MenuPage from "../pages/MenuPage/MenuPage";
import ProfileInfoPage from "../pages/ProfileInfoPage/ProfileInfoPage";
import LanguagePage from "../pages/LanguagePage/LanguagePage";
import WarningPage from "../pages/WarningPage/WarningPage";
import SupportPage from "../pages/SupportPage/SupportPage";
import ContactsVerificationPage from "../pages/ContactsVerificationPage/ContactsVerificationPage";
import AddNumberPage from "../pages/AddNumberPage/AddNumberPage";
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
      {
        path: "/reject",
        element: <RejectPage />,
      },
      {
        path: "/email",
        element: <EmailPage />,
      },
      {
        path: "/email-otp",
        element: <EmailOtpPage />,
      },
      {
        path: "/phone",
        element: <PhonePage />,
      },
      {
        path: "/phone-otp",
        element: <PhoneOtpPage />,
      },
      {
        path: "/kyc",
        element: <KYCPage />,
      },
      {
        path: "/loan",
        element: <LoanPage />,
      },
      {
        path: "/purpose",
        element: <PurposePage />,
      },
      {
        path: "/card",
        element: <CardPage />,
      },
      {
        path: "/waiting",
        element: <WaitingPage />,
      },
      {
        path: "/sima-consent",
        element: <SimaConsentPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/offer",
        element: <OfferPage />,
      },
      {
        path: "/info-check",
        element: <InfoCheckPage />,
      },
      {
        path: "/sima-sign",
        element: <SimaSignPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/not-found",
        element: <NotFoundPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/loan2",
        element: <LoanPage2 />,
      },
      {
        path: "/loan3",
        element: <LoanPage3 />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/profile-info",
        element: <ProfileInfoPage />,
      },
      {
        path: "/language",
        element: <LanguagePage />,
      },
      {
        path: "/warning",
        element: <WarningPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "/contacts-verification",
        element: <ContactsVerificationPage />,
      },
      {
        path: "/add-number",
        element: <AddNumberPage />,
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
