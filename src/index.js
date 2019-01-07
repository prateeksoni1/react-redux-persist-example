import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import persistStore from "./persistStore";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={persistStore().store}>
    <PersistGate loading={null} persistor={persistStore().persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
