/* This code is written in JavaScript and it is using the React library to render a React component
called `App` into the HTML element with the id "root". */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* The code is creating a root React element using the `ReactDOM.createRoot()` method. It takes the
HTML element with the id "root" as an argument and assigns it to the `root` constant. */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
