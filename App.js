import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches the JS Engine) - PARCEL - BABEL
//JSX => BABEL transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

//React Functional Component
const Title = () => (
  <h1 className="title">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h3 className="head">
        React Functional Component
      </h3>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
