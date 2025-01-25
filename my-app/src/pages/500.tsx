import React from "react";

const Custom404 = () => {
  return (
    <div
      className="flex flex-col text-2xl gap-2 justify-center items-center pt-[65px]"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <h1>500 - server error</h1>
      <p>申し訳ございません</p>
      <p>現在このページは表示できません...</p>
    </div>
  );
};

export default Custom404;
