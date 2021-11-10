import React from "react";
import ReactDOM from "react-dom";
//@ts-ignore
import { App as Microfrontend } from "microfrontend/App";

const App = () => (
  <>
    <div>Shell</div>
    <Microfrontend />
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
