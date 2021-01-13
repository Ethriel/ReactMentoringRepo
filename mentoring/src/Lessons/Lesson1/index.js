import React, { useEffect, useState, useLayoutEffect } from "react";

import "./index.css";

const TestComponent = ({}) => {
  return <span>{"Test"}</span>;
};

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      updates: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleMultipleClick = () => {
    Array.from({ length: 10 }, (_, i) => i).map(item =>
      //   this.setState({ count: this.state.count + 1 })
      this.setState(
        prevState => ({ count: prevState.count + 1 }),
        // () => console.log("callback")
        () => this.setState(prev => ({ updates: prev.updates + 1 }))
      )
    );
  };

  render() {
    console.log("render");
    return <button onClick={this.handleMultipleClick}>Multiply</button>;
  }
}

const LifeCycleFunc = () => {
  const [state, setState] = useState(() => {
    console.log("init");
    return {};
  });

  useEffect(() => {
    console.log("useEffect mount");
  }, []);

  useEffect(() => {
    console.log("useEffect update");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });

  console.log("render");

  return "LifeCycleFunc";
};

export const Lesson = () => {
  const [count, setCount] = useState(0);
  //   const el = <input key={1} defaultValue={"Hello"}></input>;
  //   console.log(el);
  //   console.log(<TestComponent />);

  return (
    <>
      {/* <button onClick={() => setCount(c => c + 1)}>Click Me!!</button> */}
      {/* <LifeCycle /> */}
      <LifeCycleFunc />
    </>
  );
};

export default Lesson;
