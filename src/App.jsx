import "./App.css";
import Button from "./components/Button/Button";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import TitleBlock from "./components/TitleBlock/TitleBlock";

function App() {
  return (
    <>
      <TitleBlock
        title={"Xoş gəlmişsiniz!"}
        desc={
          "Sərt şərtlər, yorucu sənədləşmə, qarışıq prosedurlar və banka getmək məcburiyyəti artıq geridə qaldı."
        }
      />
      <Button caption={"Next"} className={"next"} />
      <PrimaryButton caption={"Login"} />
    </>
  );
}

export default App;
