import React, { useCallback, useEffect, useState } from "react";

import "./index.css";
// 1. Controlled / Not Controlled switch
// 2. Children

const ControlledInput = ({ defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue ?? "");

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <div>{value}</div>
      <button onClick={() => setValue(defaultValue ?? "")}>Clear</button>
    </div>
  );
};

const InputTemplate = ({ value, onChange, ...rest }) => {
  return (
    <div {...rest}>
      <input value={value} onChange={onChange} />
      <div>{value}</div>
      <button onClick={() => onChange?.("")}>Clear</button>
    </div>
  );
};

const ControlledInputV2 = ({ value, onChange, defaultValue = "", ...rest }) => {
  const [localValue, setLocaValue] = useState(defaultValue ?? "");
  const thisValue = value !== undefined ? value : localValue;

  const handleChange = useCallback(
    e => {
      const newValue = e?.target?.value ?? "";

      onChange?.(e, newValue);
      setLocaValue(newValue);
    },
    [onChange]
  );

  return <InputTemplate {...rest} value={thisValue} onChange={handleChange} />;
};

const InputWithEffect = ({}) => {
  const [value, setValue] = useState("");
  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (value === "111") {
      console.log("HAHA");
    }
  }, [value]);

  return <ControlledInputV2 onChange={handleChange} />;
};

const GreenInput = ({ style = {}, ...props }) => {
  return <ControlledInputV2 {...props} style={{ ...style, color: "green" }} />;
};

const Lesson6 = () => {
  //   return <input value={"1"} onChange={e => console.log(e)} />;
  return (
    <div className={"spacer"}>
      {/* <ControlledInput /> */}
      {/* <InputTemplate /> */}
      <ControlledInputV2 />
      <ControlledInputV2 value={"I'm readonly"} />

      <ControlledInputV2 onChange={e => console.log(e)} />
      <ControlledInputV2 defaultValue={"I'm alive"} />
      <ControlledInputV2 style={{ color: "red" }} />
      <InputWithEffect />
      <GreenInput />
    </div>
  );
};

export default Lesson6;
