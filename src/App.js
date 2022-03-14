// import { CssModules } from "./components/CssModules";
// import { Emotion } from "./components/Emotion";
// import { InlineStyle } from "./components/inlineStyle";
// import { StyledComponents } from "./components/StyledComponents";
// import { StyledJsx } from "./components/StyledJsx";

import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion /> */}
        <Link to="/">home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
