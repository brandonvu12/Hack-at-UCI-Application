import React from "react";
import petr from "./images/petr.png";
import "react-toastify/dist/ReactToastify.css";
import ApplicationForm from "./components/applicationForm";

import "./App.css";

export default function App() {
  return (
    <body id="grad">
      <div id="form-box">
        <div class="box">
          <div class="float-child">
            <ApplicationForm />
          </div>
          <div class="float-child">
            <img src={petr} alt="Logo" width="200" id="petrimage" />
          </div>
        </div>
      </div>
    </body>
  );
}
