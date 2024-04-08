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
  React.createElement(
    "div",
    { id: "child" },
    [
        React.createElement("h1", {}, "this is an h1 tag in child"),
        React.createElement("h2", {}, "this is an h2 tag in child"),
    ]
  )
);
// to create multiple childs which are siblings inside a parent element,
// we need to pass third argument of React.createElement as an array

// this complex structure can be overcome by using JSX.


console.log('parent',parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
//render method converts heading object and converts it into a h1 tag and renders in ui
// render method replaces whatever content we have inside root element with provided parent element