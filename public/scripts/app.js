"use strict";

// JSX - Javascript XML
var root = document.getElementById('root'); // React

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Silav C\xEEhan"), /*#__PURE__*/React.createElement("div", null, "Ev minak pir xwe\u015F \xE7\xEAbuye..."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Er\xEA"), /*#__PURE__*/React.createElement("li", null, "Na"), /*#__PURE__*/React.createElement("li", null, "Nizanim")));
var number = 0;
var btnOneClassName = "btnRed";
var btnMinusClassName = "btnGreen";

var addOne = function addOne() {
  number++;
  console.log("add one");
  renderApp();
};

var minusOne = function minusOne() {
  number--;
  console.log("minus one");
  renderApp();
};

function renderApp() {
  var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hejmar : ", number), /*#__PURE__*/React.createElement("button", {
    id: "btnOne",
    className: btnOneClassName,
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnTwo",
    className: btnMinusClassName,
    onClick: minusOne
  }, "-1")); // ReactDOM

  ReactDOM.render(template2, root);
}

function tick() {
  var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "dem : ", new Date().toLocaleTimeString()), /*#__PURE__*/React.createElement("h3", null, "d\xEErok : ", new Date().toLocaleDateString()));
  ReactDOM.render(element, root);
}

setInterval(tick, 1000);
tick(); //renderApp();
