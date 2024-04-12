import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./resources/react-logo.svg";
import userIcon from "./resources/user.svg";
const heading = React.createElement(
  "h1",
  { id: "heading" }, //these are attributes
  "hello world from react" // this comes under children
);
//in this first parameter is element,
// second is object where we give attributes to the element
// this is the content to be placed inside element
console.log(heading); //this consoles an object, heading is a js object, which is a react element.

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is an h1 tag in child"),
    React.createElement("h2", {}, "this is an h2 tag in child"),
  ])
);
console.log("parent", parent);

// to create multiple childs which are siblings inside a parent element,
// we need to pass third argument of React.createElement as an array

// this complex structure can be overcome by using JSX.

// JSX  (transpiled before it reaches the js) -> by parcel -> babel(babel actually transpiles)

// JSX => Babel transpiles it to React.createElement => ReactElement -JS Object => HTMLElement(render)
// React element
const JsxHeading = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);
// console.log('jsxHeading', jsxHeading);

// Laying foundation assignment ==>
// 1)nested header element using react.createElement(h1,h2,h3 inside a div with class="title")

const headerElement = React.createElement(
  "div",
  { className: "title" },
  React.createElement(
    "h1",
    {},
    React.createElement(
      "h2",
      {},
      React.createElement(
        "h3",
        {},
        "This is header element using react element"
      )
    )
  )
);

console.log("headerElement", headerElement);

// same using jsx
const headerElementJsx = (
  <div className="title">
    <h1>
      <h2>
        <h3>This is header element using react JSX</h3>
      </h2>
    </h1>
  </div>
);

// same using react functional component
const HeaderFunctionalComponent = () => {
  return (
    <div className="title">
      <h1>
        <h2>
          <h3>This is header element using react functional component</h3>
        </h2>
      </h1>
    </div>
  );
};

// 2nd assignment
//  description => header component using functional component with jsx with below features
// logo on left, search bar in middle, user icon on right

const PageHeader = () => {
  return (
    <div className="page-header">
      <img
        alt="logo"
        src={logo}
      />
      <input type="search" className="search" placeholder="Search" />
      <img alt="user-logo" src={userIcon} className="user-logo"/>
    </div>
  );
};

// React functional Component
const HeadingComponent = () => (
  <div id="container">
    <PageHeader />
    <JsxHeading />
    {heading}
    {headerElement}
    {headerElementJsx}
    <HeaderFunctionalComponent />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);
//render method converts heading object and converts it into a h1 tag and renders in ui
// render method replaces whatever content we have inside root element with provided parent element
