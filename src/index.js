import React from "react";
import {createStore} from "redux";
import {rootReducer} from "./module/rootReducer";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);
root.render(
<Provider store={store}>
    <App />
</Provider>);

reportWebVitals();
