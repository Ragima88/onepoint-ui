import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Image from "../../components/Image/Image";
import age from "../../assets/icons/kyc-icon-1.svg";
import amount from "../../assets/icons/kyc-icon-2.svg";
import number from "../../assets/icons/kyc-icon-3.svg";
import delay from "../../assets/icons/kyc-icon-4.svg";
import face from "../../assets/icons/kyc-icon-5.svg";
import transfer from "../../assets/icons/kyc-icon-6.svg";
import check from "../../assets/icons/kyc-icon-7.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./loan-page.scss";
import LoanBottom from "../../components/LoanBottom/LoanBottom";

const iconMapping = {
  age: age,
  amount: amount,
  number: number,
  delay: delay,
  face: face,
  transfer: transfer,
  check: check,
};

const LoanPage = () => {
  const { t } = useTranslation();
  const menuItems = Object.keys(t("loanPage.menu", { returnObjects: true }));
  return (
    <Page className={"loan-page"}>
      <div className="loan-page-main">
        <TitleBlock title={t("loanPage.title")} desc={t("loanPage.desc")} />
        <ul className="loan-page-menu">
          {menuItems.map((item) => (
            <li className="loan-page-menu-item" key={item}>
              {iconMapping[item] && (
                <Image
                  className={"loan-page-menu-icon"}
                  src={iconMapping[item]}
                  alt={t(`menu.${item}`)}
                />
              )}
              {t(`menuPage.menu.${item}`)}
            </li>
          ))}
        </ul>
      </div>
      <div className="loan-page-bottom">
        <PrimaryButton
          className="loan-page-btn"
          caption={t("loanPage.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default LoanPage;
