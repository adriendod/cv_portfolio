import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "assets/styles/base.scss";
import { PAGES } from "utils/constants";
import Menu from "components/common/Menu";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Menu />
      {PAGES.map((page) => (
        <Route
          key={page.name}
          exact
          path={page.url}
          component={page.component}
        />
      ))}
    </React.Fragment>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
