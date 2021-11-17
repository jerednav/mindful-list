import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById("root"));
