// import { CssModules } from "./components/CssModules";
// import { Emotion } from "./components/Emotion";
// import { InlineStyle } from "./components/inlineStyle";
// import { StyledComponents } from "./components/StyledComponents";
// import { StyledJsx } from "./components/StyledJsx";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

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
      <Switch>
        {/* exactは完全一致。 */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
