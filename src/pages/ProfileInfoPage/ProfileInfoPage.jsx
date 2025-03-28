import { Link } from "react-router-dom";
import "./profile-info-page.scss";
import Page from "../../components/Page/Page";
import Image from "../../components/Image/Image";
import user from "../../assets/icons/user-icon.svg";
import fin from "../../assets/icons/fin-code-icon.svg";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";

const ProfileInfoPage = () => {
  const { t } = useTranslation();
  const menuItemFirst = t("profileInfoPage.user", { returnObjects: true });
  const menuItemSecond = t("profileInfoPage.finCode", { returnObjects: true });
  const menuItemThird = t("profileInfoPage.email", { returnObjects: true });
  const menuItemFourth = t("profileInfoPage.phone", { returnObjects: true });
  return (
    <Page className={"profile-info-page"}>
      <Link className="profile-info-page-item">
        <Image className={"profile-info-page-item-icon"} src={user} />
        <div className="profile-info-page-item-text">
          <span className="profile-info-page-item-label">
            {menuItemFirst.label}
          </span>
          <span className="profile-info-page-item-value">
            {menuItemFirst.name}
          </span>
        </div>
      </Link>
      <Link className="profile-info-page-item">
        <Image className={"profile-info-page-item-icon"} src={fin} />
        <div className="profile-info-page-item-text">
          <span className="profile-info-page-item-label">
            {menuItemSecond.label}
          </span>
          <span className="profile-info-page-item-value">
            {menuItemSecond.code}
          </span>
        </div>
      </Link>
      <Link className="profile-info-page-item write">
        <Image className={"profile-info-page-item-icon"} src={email} />
        <div className="profile-info-page-item-text">
          <span className="profile-info-page-item-label">
            {menuItemThird.label}
          </span>
          <span className="profile-info-page-item-value">
            {menuItemThird.address}
          </span>
        </div>
      </Link>
      <Link className="profile-info-page-item write">
        <Image className={"profile-info-page-item-icon"} src={phone} />
        <div className="profile-info-page-item-text">
          <span className="profile-info-page-item-label">
            {menuItemFourth.label}
          </span>
          <span className="profile-info-page-item-value">
            {menuItemFourth.number}
          </span>
        </div>
      </Link>
    </Page>
  );
};
export default ProfileInfoPage;
