import React from "react";

const Custom404 = () => {
  return (
    <div
      className="flex flex-col text-2xl gap-2 justify-center items-center pt-[65px]"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <h1>404 - not found</h1>
      <p>申し訳ございません</p>
      <p>ページが見つかりません...</p>
    </div>
  );
};

export default Custom404;
