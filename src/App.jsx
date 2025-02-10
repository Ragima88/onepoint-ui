import "./App.css";
import Button from "./components/Button/Button";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

function App() {
  return (
    <>
      <Button caption={"Next"} className={"next"} />
      <PrimaryButton caption={"Login"} />
    </>
  );
}

export default App;
