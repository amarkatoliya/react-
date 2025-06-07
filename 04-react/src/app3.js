import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Chai = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.price),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Chai Variotion by Amarrrrr"),
    React.createElement(Chai, {
      name: "Masala Chai",
      price: "2000",
    }),
    React.createElement(Chai, {
      name: "Ginger Chai",
      price: "3000",
    }),
    React.createElement(Chai, {
      name: "Normal Chai",
      price: "2400",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
