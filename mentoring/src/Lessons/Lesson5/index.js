import React, { useState } from "react";

import { ControledThemeProvider, useThemeContext } from "./ThemeContext";

const ThemeControl = () => {
  const { getColor, setColor } = useThemeContext();
  const [, setClickCount] = useState(0);
  const mainColor = getColor();

  const handleSwitchColor = () => {
    setColor(mainColor === "red" ? "green" : "red");
  };

  return (
    <>
      <button onClick={handleSwitchColor}>Switch from: {mainColor}</button>
      <button onClick={() => setClickCount(c => c + 1)}>Click me</button>
    </>
  );
};

const Memo1 = React.memo(ThemeControl);

const SubProvider = () => {
  return (
    <ControledThemeProvider>
      <Memo1 />
    </ControledThemeProvider>
  );
};

const Lesson5 = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <>
      <button onClick={() => setClickCount(c => c + 1)}>{clickCount}</button>
      <ControledThemeProvider>
        {[1, 2].map(e => (
          <span key={e}>{e}</span>
        ))}
        <SubProvider />
        <Memo1 />
      </ControledThemeProvider>
    </>
    // <>
    //   <ControledThemeProvider>
    //     <>
    //       <>
    //         <>
    //           <>
    //             <ControledThemeProvider>
    //               <>
    //                 <ThemeControl />
    //               </>
    //             </ControledThemeProvider>
    //           </>
    //         </>
    //         <ThemeControl />
    //       </>
    //     </>
    //   </ControledThemeProvider>
    // </>
  );
};

export default Lesson5;
