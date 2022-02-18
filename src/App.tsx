import { RecoilRoot } from "recoil";
import Inputs from "./components/Inputs";

function App() {
  return (
    <>
      <header>환율 계산기</header>
      <RecoilRoot>
        <Inputs />
      </RecoilRoot>
    </>
  );
}

export default App;
