import React, { useState } from "react";

import useLoadUser from "./useLoadUser";

const UserData = ({ userId, title }) => {
  const [thisTitle, setThisTitle] = useState(title ?? "");
  const handleChange = e => setThisTitle(e.target.value);

  return (
    <div>
      <div>{userId}</div>
      <input value={thisTitle} onChange={handleChange}></input>
      {/* <button onClick={() => setThisTitle()}>click</button> */}
    </div>
  );
};

const UserDataLoader = ({ userId }) => {
  const { data, loading } = useLoadUser(userId);

  if (loading) return "...";

  return <UserData key={data?.id} userId={data?.id} title={data?.title} />;
};

const Lesson4 = () => {
  const [userId, setUserId] = useState(1);
  const handleChange = e => setUserId(e.target.value);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <input value={userId} onChange={handleChange}></input>
      </div>
      <div style={{ marginLeft: 120 }}>
        <UserDataLoader userId={userId} />
      </div>
    </div>
  );
};

export default Lesson4;
