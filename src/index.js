import React from "react";
import ReactDOM from "react-dom";

const fName = "Juan Jose";
const sName = "Guzman Zapata";
var currentYear = new Date().getFullYear();

const currentTime = new Date().getHours();
let greetings;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greetings = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greetings = "Good Afeternoon";
  customStyle.color = "green";
} else {
  greetings = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {fName + " " + sName}'s Favorite Foods
    </h1>
    <ul>
      <li>Randam</li>
      <li>Beans and Eggs</li>
      <li>Chicken at Dixy</li>
      <li>Colombian Hotdogs</li>
    </ul>
    <div>
      <img
        className="food-img"
        alt="Colombian Hotdog"
        src="https://th.bing.com/th/id/OIP.nONYY6euqIl6V6a8Qh34SAHaE8?pid=ImgDet&rs=1"
      />
      <img
        className="food-img"
        alt="Jamaican Rundown"
        src="https://1.bp.blogspot.com/-nO_BMy4jzEE/Tt_4TdOl6EI/AAAAAAAAABg/mY01qh8WdF0/s1600/rundown+dish.JPG"
      />
      <img
        className="food-img"
        alt="Dixy chicken"
        src="https://th.bing.com/th/id/R.bdc6fbe18a63d1285c37d5d909194fa0?rik=eK6qRaxRx4rzPg&pid=ImgRaw&r=0"
      />
    </div>
    <div>
      <h2 className="heading" style={customStyle}>
        {greetings}
      </h2>
    </div>
    <div>
      <p>Created by {fName + " " + sName}</p>
      <p>Copyright {currentYear}</p>
    </div>
  </div>,

  document.getElementById("root")
);
