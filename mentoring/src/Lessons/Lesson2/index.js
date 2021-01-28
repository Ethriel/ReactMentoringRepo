import React from "react";

import "./index.css";

// Base component that can be extended on all directions
const BorderedBox = ({ text, className, ...rest }) => {
  return (
    <div {...rest} className={["bordered-text", className].join(" ")}>
      {/* <div {...rest} className="bordered-text"></div> // strict */}
      {text}
    </div>
  );
};

// Component with defined sub-component = having a "Template"
const LabeledText = ({ label, text, TextComponent = BorderedBox }) => {
  return (
    <div>
      <span>{label}</span>
      <TextComponent text={text} />
    </div>
  );
};
// exporting partial component
LabeledText.TextComponent = BorderedBox;

// Direct composition
const RedBox = ({ style, ...rest }) => (
  <BorderedBox {...rest} style={{ ...style, color: "red" }} />
);

// Direct HOC
const withGreenColor = ComponentToWrap => {
  const WITHGREENCOLOR = props => (
    <ComponentToWrap {...props} color={"green"} />
  );

  WITHGREENCOLOR.displayName = `withGreenColor${
    ComponentToWrap.displayName ?? ComponentToWrap.name
  }`;

  return WITHGREENCOLOR;
};

// Prop-friendly composition
// makes interface easier
// this case removes "style" entirely!
const PaintMeBox = ({ color, ...rest }) => (
  <BorderedBox style={{ color }} {...rest} />
);

// using HOC to create new Component
const GreenBox = withGreenColor(PaintMeBox);

// Configurable HOC
const withColor = color => ComponentToWrap => props => (
  <ComponentToWrap {...props} color={color} />
);

// using configurable HOC to create new Component
const YellowBox = withColor("yellow")(PaintMeBox);

// creating direct HOC from configurable HOC
const withYellowColor = withColor("yellow");
// and using it
const AgainYellowBox = withYellowColor(PaintMeBox);

const Lesson2 = () => {
  return (
    <>
      <BorderedBox text={"test"} />
      <BorderedBox text={"test again"} />
      <LabeledText label={"first label"} text={"first test again"} />
      <LabeledText
        label={"first label"}
        text={"first test again"}
        TextComponent={({ text }) => `overrrided text ${text}`}
      />
      <LabeledText
        label={"the same"}
        text={"just like first time"}
        TextComponent={LabeledText.TextComponent}
      />
      <LabeledText
        label={"this time i'm red"}
        text={"REALLY RED"}
        TextComponent={RedBox}
      />
      <GreenBox text={"Grinch"} />
      <YellowBox text={"Sun"} />
      <AgainYellowBox text={"Are you Sirius?"} />
    </>
  );
};

export default Lesson2;
