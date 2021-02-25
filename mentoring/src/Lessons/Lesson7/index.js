import React from "react";
import PropTypes from "prop-types";

const Child = ({ name }) => {
  return <div>My name is {name}</div>;
};

const ChildrenEater = ({ children }) => {
  console.log("I have your children", children);
  const thisChildren = React.Children.toArray(children)
    .filter(c => !c.props.bad)
    .sort((a, b) => b.props.quality - a.props.quality)
    .map((c, index) => {
      if (c.type === Helper) {
        return (
          <div style={{ margin: 20, border: "10px solid yellow" }}>{c}</div>
        );
      }

      return (
        <div key={index} style={{ margin: 20, border: "1px solid black" }}>
          {c}
        </div>
      );
    });

  return <div style={{ background: "red", padding: 20 }}>{thisChildren}</div>;
};

const Helper = ({ children }) => {
  const child = React.Children.toArray(children)[0];

  //   return <Child name={`${child.props.name}*`} />;
  return React.cloneElement(child, { name: `${child.props.name}*` });
};

Helper.propTypes = {
  children: PropTypes.element.isRequired,
};

const Lesson7 = () => {
  return (
    <ChildrenEater name={"Anakin"}>
      {/* <div />
      <span>
        <div>text</div>
      </span> */}
      <Child name={"Vova"} quality={10} />
      <Child name={"Antony"} quality={8} />
      <Child name={"Vlad"} quality={9} />
      <Child name={"Onufriy"} bad quality={-2} />
      <Helper>
        <Child name={"Ivan"} quality={100} />
      </Helper>
    </ChildrenEater>
  );
};
export default Lesson7;
