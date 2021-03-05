import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./index.css";

export const Interstellar = ({
  blackHoleDistance,
  timeDilation = 1,
  onJump,
}) => {
  const [jumps, setJumps] = useState(0);
  const [isRobotHere, setRobotHere] = useState(true);

  const handleJump = () => {
    setJumps(j => j + 1);
    // onJump?.(jumps + 1);
  };

  useEffect(() => {
    onJump?.(jumps);
  }, [jumps]);

  return (
    <div className={"interstellar-container"}>
      <div
        style={{ transform: `scale(${timeDilation}, 1)` }}
        className={"interstellar-container__ship"}
        onClick={handleJump}
      >
        <div
          className={"interstellar-container__ship__Cooper"}
          onClick={() => setRobotHere(r => !r)}
        ></div>
        {/* <div className={"interstellar-container__ship__CatWoman"}></div> */}
        <div className={"interstellar-container__ship__Dude"}></div>
        {isRobotHere && (
          <div className={"interstellar-container__ship__Robot"}></div>
        )}
      </div>
      <span
        className={
          blackHoleDistance < 1000 ? "interstellar-container__ship__danger" : ""
        }
      >
        {blackHoleDistance < 1000 && "DANGER"}
      </span>
    </div>
  );
};

export const DangerHtml = ({ content }) => {
  const thisRef = useRef(null);

  useLayoutEffect(() => {
    thisRef.current && (thisRef.current.innerHTML = content);
  }, [content]);

  return <span ref={thisRef}></span>;
};

const Lesson9 = () => {
  return (
    <>
      <DangerHtml content={"<div>Text</div>"} />
      <Interstellar timeDilation={2} />
    </>
  );
};

export default Lesson9;
