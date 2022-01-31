import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../features/redux/store";
import { AppNavigation } from "../pages/ui";
import { Provider } from "react-redux";

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <AppNavigation />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}
