import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/RootReducer.js";

const ReduxStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measurin  g performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
