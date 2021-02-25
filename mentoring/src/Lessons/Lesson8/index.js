import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

const Input = ({ forwardedRef, ...props }) => {
  return <input ref={forwardedRef} {...props} />;
};

const ForwardedInput = React.forwardRef((props, forwardedRef) => (
  <Input forwardedRef={forwardedRef} {...props} />
));

// class DivClass extends React.Component {
//   handleClick = () => {};
//   render() {
//     return <div {...this.props} />;
//   }
// }

const ContainerForLesson = props => {
  const ref = useRef(null);
  const [state, setState] = useState({});

  //   const divElement = <DivClass ref={ref} style={{}} />;
  const inputElement = (
    <ForwardedInput ref={ref} style={{}} className={"input-with-focus"} />
  );

  return (
    <>
      {inputElement}
      <button onClick={() => setState({})}>Re-render</button>
      <button onClick={() => ref.current?.focus?.()}>Focus</button>
    </>
  );
};

const ReallyHardToUseComponent = ({ children, prop1 = [], prop2 }) => {
  if (prop1.includes(prop2)) {
    return "Yes";
  }

  return children;
};

ReallyHardToUseComponent.propTypes = {
  //   prop1: PropTypes.array,
  prop1: (props, propName, componentName, ...rest) => {
    console.log(...rest);

    const value = props[propName];
    const prop2Value = props["prop2"];

    if (prop2Value && !value) return new Error("Add prop1 if you use prop2");
  },
  children: PropTypes.element.isRequired,
  prop2: (props, propName, componentName) => {
    const value = props[propName];

    if (!value)
      return new Error(
        `Component ${componentName} recieved falsy value of prop '${propName}'`
      );
  },
};

const Lesson8 = () => {
  return (
    <>
      <ReallyHardToUseComponent prop1={[]} prop2={true}>
        {/* <span>TextContent</span> */}
        TextContent
        <span />
      </ReallyHardToUseComponent>
      {/* <ContainerForLesson /> */}
    </>
  );
};

export default Lesson8;
