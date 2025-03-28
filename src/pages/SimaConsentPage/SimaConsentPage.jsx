import "./sima-consent-page.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import simaLogo from "../../assets/images/Sima-logo.png";
import check from "../../assets/icons/check.svg";
import googlePlay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";
import { Link } from "react-router-dom";

const SimaConsentPage = () => {
  const { t } = useTranslation();
  const items = t("simaConsentPage.items", { returnObjects: true }) || [];
  return (
    <Page className={"sima-consent-page"}>
      <div className="sima-consent-page-main">
        <TitleBlock
          title={t("simaConsentPage.title")}
          desc={t("simaConsentPage.desc")}
        />
        <Image className="sima-logo" src={simaLogo} />
        <div className="sima-consent-page-items">
          {items.map((i) => {
            return (
              <div className={"sima-item"} key={i.id}>
                <Image className="sima-icon" src={check} />
                <div className="sima-item-desc">{i.content}</div>
              </div>
            );
          })}
        </div>

        <div className="sima-consent-page-stores">
          <Link className="google-play-link" to={""}>
            <Image className="google-play-img" src={googlePlay} />
          </Link>
          <Link className="app-store-link">
            <Image className="app-store-img" src={appStore} />
          </Link>
        </div>
      </div>
      <div className="sima-consent-page-bottom">
        <PrimaryButton
          className="sima-consent-page-primary-btn"
          caption={t("simaConsentPage.primaryCaption")}
        />
        <Button
          className="sima-consent-page-btn"
          caption={t("simaConsentPage.buttonCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default SimaConsentPage;
