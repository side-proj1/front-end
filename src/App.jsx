import LoginContainer from './container/LoginContainer';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    outline: none; 
  }
  html, body, #root {
    height: 100%;
    margin: 0;
  }
  html{
    font-size: 20px;
  }
  button {
    background-color: #fff;
    &:hover {
      cursor: pointer;
    }
  }
`
function App() {
  return (<>
    <GlobalStyles />
    <Routes>
      <Route path='/' element={<LoginContainer />} />
    </Routes>
    </>
  );
}

export default App;