import "./offer-page.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import info from "../../assets/icons/info-circle.svg";

const OfferPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"offer-page"}>
      <div className="offer-page-main">
        <TitleBlock title={t("offerPage.title")} desc={t("offerPage.desc")} />
        <div className="credit-div">
          <div className="credit-btn">
            <button>{t("offerPage.month")}</button>
          </div>
        </div>
        <div className="offer-page-info">
          <Image className="offer-page-info-icon" src={info} />
          <span>{t("offerPage.info")}</span>
        </div>
        <div className="credit-amount">
          <div className="credit-amount-paid">
            <div className="credit-amount-title">
              {t("offerPage.paidTitle")}
            </div>
            <div className="credit-amount-price">
              {t("offerPage.paidPrice")}
              <span> AZN</span>
            </div>
          </div>
          <div className="credit-amount-returned">
            <div className="credit-amount-title">
              {t("offerPage.returnedTitle")}
            </div>
            <div className="credit-amount-price">
              {t("offerPage.returnedPrice")}
              <span> AZN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-page-bottom">
        <PrimaryButton
          className="offer-page-primary-btn"
          caption={t("offerPage.primaryCaption")}
        />
        <Button
          className="offer-page-btn"
          caption={t("offerPage.buttonCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default OfferPage;
