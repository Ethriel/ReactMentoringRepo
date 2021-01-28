import React, { useState, useEffect } from "react";

const RenderTracker = props => {
  console.log("render");
  return "CommonComponent";
};

const Memoized = React.memo(RenderTracker);

const BaseComponent = () => {
  const [state, setState] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const handleIncrement = () => setState(old => old + 1);

  return (
    <>
      <button onClick={handleIncrement}>Push Me</button>
      <div>{`State = '${state}'`}</div>
      <Memoized />
    </>
  );
};

const Input = ({ value, onChange, wrapperStyle, ...rest }) => {
  return (
    <div style={{ wrapperStyle }}>
      <input
        {...rest}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      ></input>
    </div>
  );
};

const Checkbox = ({ value, onChange, wrapperStyle, ...rest }) => {
  return (
    <div style={{ wrapperStyle }}>
      <input
        {...rest}
        type="checkbox"
        checked={value}
        onChange={e => onChange?.(e.target.checked)}
      ></input>
    </div>
  );
};

const defValue = {
  input: "hello",
  checked: false,
};
// {input, checked}
const CombinedComponent = ({ defaultValue = defValue }) => {
  const [value, setValue] = useState(defaultValue ?? {});

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const { input, checked } = value ?? {};

  const handleInputChange = input => setValue(value => ({ ...value, input }));
  const handleCheckedChange = checked =>
    setValue(value => ({ ...value, checked }));

  const handleInputChangeWithCheckedState = input => {
    setValue(value => ({ ...value, input }));

    if (input === "Alex" && !checked) {
      handleCheckedChange(true);
    }
  };

  //   useEffect(() => {
  //     if (input === "Alex" && !checked) {
  //       handleCheckedChange(true);
  //     }
  //   }, [input, checked]);

  return (
    <>
      <Input value={input} onChange={handleInputChangeWithCheckedState} />
      <Checkbox value={checked} onChange={handleCheckedChange} />
    </>
  );
};

const Lesson3 = () => {
  return <CombinedComponent />;
};

export default Lesson3;
