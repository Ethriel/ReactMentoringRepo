import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import store from "./store";

const ButtonWrapper = ({ onClick }) => {
  useEffect(() => {
    console.log("Mounted");

    return () => console.log("Unmounted");
  }, []);

  return <button onClick={onClick}>Fetch</button>;
};

const FetchUserButton = ({ name, onFetch }) => {
  const butt = <ButtonWrapper key={"button"} onClick={onFetch} />;

  // if (name)
  //   return (
  //     <>
  //       {name && <div>{`Current user name: ${name}`}</div>}
  //       {butt}
  //     </>
  //   );

  // return butt;

  return (
    <>
      {name && <div>{`Current user name: ${name}`}</div>}
      {butt}
    </>
  );
};
const ConnectedFetchUserButton = connect(
  state => ({ name: state?.user?.name }),
  {
    onFetch: () => ({ type: "USER_FETCH_REQUESTED" }),
  }
)(FetchUserButton);

const Lesson10 = () => {
  return (
    <Provider store={store}>
      <ConnectedFetchUserButton />
    </Provider>
  );
};

export default Lesson10;
