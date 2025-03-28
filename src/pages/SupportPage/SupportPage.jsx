import "./support-page.scss";
import Page from "../../components/Page/Page";
import Image from "../../components/Image/Image";
import liveSupport from "../../assets/icons/customer-support.svg";
import email from "../../assets/icons/email.svg";
import instagram from "../../assets/icons/instagram.svg";
import telegram from "../../assets/icons/telegram.svg";
import facebook from "../../assets/icons/facebook.svg";
import tiktok from "../../assets/icons/tik-tok.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import youtube from "../../assets/icons/youtube.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Link } from "react-router-dom";

const iconMapping = {
  liveSupport: liveSupport,
  email: email,
  instagram: instagram,
  telegram: telegram,
  facebook: facebook,
  tiktok: tiktok,
  linkedin: linkedin,
  youtube: youtube,
};

const SupportPage = () => {
  const { t } = useTranslation();
  const menuItems = Object.keys(t("supportPage.menu", { returnObjects: true }));
  return (
    <Page className={"support-page"}>
      <div className="support-page-menu">
        {menuItems.map((item) => (
          <Link className="support-page-menu-item" key={item}>
            {iconMapping[item] && (
              <Image
                className={"support-page-menu-item-icon"}
                src={iconMapping[item]}
                alt={t(`menu.${item}`)}
              />
            )}
            {t(`supportPage.menu.${item}`)}
          </Link>
        ))}
      </div>
    </Page>
  );
};
export default SupportPage;
