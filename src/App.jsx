import GlobalStyles from "./style/GlobalStyles";
import LoginContainer from "./containers/LoginContainer";
import SubjectContainer from "./containers/SubjectContainer";
import TimerContainer from "./containers/TimerContainer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/home" element={<SubjectContainer />} />
        <Route path="/timer" element={<TimerContainer />} />
      </Routes>
    </>
  );
}

export default App;
