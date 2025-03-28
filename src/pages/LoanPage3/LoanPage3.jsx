import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./loan-page3.scss";
import Image from "../../components/Image/Image";
import active from "../../assets/icons/active-circle.svg";
import upload from "../../assets/icons/download-cloud.svg";
import { Link } from "react-router-dom";

const LoanPage3 = () => {
  const { t } = useTranslation();
  const loanInfo = t("loanPage3.loanInfo", { returnObjects: true });
  return (
    <Page className={"loan-page3"}>
      <div className="loan-page3-main">
        <div className="debt">
          <div className="debt-top">
            <div className="debt-top-text">{t("loanPage3.debtTitle")}</div>
            <div className="debt-top-active">
              <Image className="active-icon" src={active} />
              <span className="active-text">{t("loanPage3.status")}</span>
            </div>
          </div>
          <div className="debt-amount">{t("loanPage3.debtAmount")} ₼</div>
          <div className="debt-bottom">
            <div className="debt-bottom-left">
              <span className="debt-bottom-left-text">
                {t("loanPage3.leftText")}
              </span>
              <span className="debt-bottom-left-price">
                {t("loanPage3.leftPrice")} ₼
              </span>
            </div>
            <div className="debt-bottom-right">
              <span className="debt-bottom-right-text">
                {t("loanPage3.rightText")}
              </span>
              <span className="debt-bottom-right-price">
                {t("loanPage3.rightPrice")} ₼
              </span>
            </div>
          </div>
        </div>
        <ul className="loan-info">
          {Object.keys(loanInfo.desc).map((item) => (
            <li className="loan-info-item" key={item}>
              <span className="loan-info-item-desc">{loanInfo.desc[item]}</span>
              <span className="loan-info-item-value">
                {loanInfo.value[item]}
              </span>
            </li>
          ))}
        </ul>
        <Link to={""} className="upload">
          <span className="upload-text">{t("loanPage3.upload")}</span>
          <Image className="upload-icon" src={upload} />
        </Link>
      </div>
      <div className="loan-page3-bottom">
        <PrimaryButton
          className="loan-page3-primary-btn"
          caption={t("loanPage3.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default LoanPage3;
