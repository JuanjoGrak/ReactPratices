import React from "react";
import ReactDOM from "react-dom";

const fName = "Juan Jose";
const sName = "Guzman Zapata";

ReactDOM.render(
  <div>
    <h1>{fName + " " + sName}'s Favorite Foods</h1>
    <ul>
      <li>Randam</li>
      <li>Beans and Eggs</li>
      <li>Chicken at Dixy</li>
      <li>Colombian Hotdogs</li>
    </ul>
  </div>,
  document.getElementById("root")
);
