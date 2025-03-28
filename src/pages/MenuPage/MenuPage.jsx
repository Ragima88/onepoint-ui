import "./menu-page.scss";
import Page from "../../components/Page/Page";
import Image from "../../components/Image/Image";
import userPic from "../../assets/images/photo.png";
import user from "../../assets/icons/user.svg";
import lang from "../../assets/icons/lang.svg";
import phone from "../../assets/icons/phone.svg";
import lock from "../../assets/icons/lock.svg";
import security from "../../assets/icons/security.svg";
import help from "../../assets/icons/help.svg";
import logout from "../../assets/icons/logout.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Link } from "react-router-dom";

const iconMapping = {
  user: user,
  lang: lang,
  phone: phone,
  lock: lock,
  security: security,
  help: help,
};

const MenuPage = () => {
  const { t } = useTranslation();
  const menuItems = Object.keys(t("menuPage.menu", { returnObjects: true }));
  return (
    <Page className={"menu-page"}>
      <div className="menu-page-user">
        <Image className="menu-page-user-pic" src={userPic} />
        <span className="menu-page-user-name">{t("menuPage.name")}</span>
      </div>
      <div className="menu-page-menu">
        {menuItems.map((item) => (
          <Link className="menu-page-menu-item" key={item}>
            {iconMapping[item] && (
              <Image
                className={"menu-page-menu-item-icon"}
                src={iconMapping[item]}
                alt={t(`menu.${item}`)}
              />
            )}
            {t(`menuPage.menu.${item}`)}
          </Link>
        ))}
        <Link className="menu-page-menu-item">
          <Image className={"logout-icon"} src={logout} />
          <span className="logout-text">{t("menuPage.logout")}</span>
        </Link>
      </div>
    </Page>
  );
};
export default MenuPage;
