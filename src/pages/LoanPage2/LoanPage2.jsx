import "./loan-page2.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import circle from "../../assets/icons/circle.svg";
import calendar from "../../assets/icons/calendar-minus.svg";
import pic from "../../assets/icons/Asset.svg";

import { useTranslation } from "react-i18next";
import "../../i18n";
import Page from "../../components/Page/Page";

const LoanPage2 = () => {
  const { t } = useTranslation();
  return (
    <Page className={"loan-page2"}>
      <div className="loan-page2-main">
        <Image className="loan-page2-pic" src={pic} />
        <TitleBlock title={t("loanPage2.title")} desc={t("loanPage2.desc")} />
        <div className="loan-page2-main-content">
          <div className="loan-page2-main-content-item">
            <Image className="loan-page2-main-content-img" src={calendar} />
            <div className="loan-page2-main-content-text">
              <span className="loan-page2-main-content-item-title">
                {t("loanPage2.contentTitleFirst")}
              </span>
              <span className="loan-page2-main-content-item-desc">
                {t("loanPage2.contentDate")}
              </span>
            </div>
          </div>
          <div className="loan-page2-main-content-item">
            <Image className="loan-page2-main-content-img" src={circle} />
            <div className="loan-page2-main-content-text">
              <span className="loan-page2-main-content-item-title">
                {t("loanPage2.contentTitleSecond")}
              </span>
              <span className="loan-page2-main-content-item-desc">
                {t("loanPage2.contentDesc")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="loan-page2-bottom">
        <PrimaryButton
          className="loan-page2-primary-btn"
          caption={t("loanPage2.primaryCaption")}
        />
        <Button
          className="loan-page2-btn"
          caption={t("loanPage2.buttonCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default LoanPage2;
