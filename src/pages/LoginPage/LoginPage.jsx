import "./login-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import FinCodeField from "../../components/FinCodeField/FinCodeField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Password from "../../components/Password/Password";
import { useState } from "react";

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [finCode, setFinCode] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!finCode.trim() || !password.trim()) {
      alert("Zəhmət olmasa, FİN kod və şifrəni daxil edin.");
      return;
    }
    if (finCode.trim().length < 7) {
      alert("FİN kod 7 simvoldan ibarət olmalıdır.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate("/came-from");
    }, 1000);
  };

  return (
    <Page className="login-page">
      <div className="login-page-top">
        <TitleBlock
          title={t("loginPage.title")}
          desc={t("loginPage.description")}
        />
        <div className="login-page-fields">
          <FinCodeField
            label={t("loginPage.finCodeLabel")}
            disabled={loading}
            fin={finCode}
            setFin={setFinCode}
          />
          <Password
            label={t("loginPage.passwordLabel")}
            disabled={loading}
            value={password}
            onChange={setPassword}
          />
          <Link className="login-page-link" to={""} onClick={""}>
            {t("loginPage.forgotPassword")}
          </Link>
        </div>
      </div>
      <div className="login-page-bottom">
        <PrimaryButton
          caption={t("loginPage.primaryCaption")}
          onClick={handleSubmit}
          disabled={loading}
          loading={loading}
        />
        <div className="login-page-bottom-question">
          <span>{t("loginPage.notAccount")}&nbsp;</span>
          <Link
            className="login-page-bottom-question-link"
            to={"/personal-info"}
          >
            {t("loginPage.register")}
          </Link>
        </div>
      </div>
    </Page>
  );
};
export default LoginPage;
