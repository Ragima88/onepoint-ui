import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Image from "../../components/Image/Image";
import check from "../../assets/icons/check.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./kyc-page.scss";
import Page from "../../components/Page/Page";

const KYCPage = () => {
  const { t } = useTranslation();
  const items = t("kycPage.items", { returnObjects: true }) || [];

  return (
    <Page className={"kyc-page"}>
      <div className="kyc-page-top">
        <TitleBlock title={t("kycPage.title")} desc={t("kycPage.desc")} />
        {items.map((i) => {
          return (
            <div className={"kyc-item"} key={i.id}>
              <Image className="kyc-icon" src={check} />
              <div className="kyc-item-desc">{i.content}</div>
            </div>
          );
        })}
      </div>
      <PrimaryButton caption={t("kycPage.primaryCaption")} />
    </Page>
  );
};
export default KYCPage;
