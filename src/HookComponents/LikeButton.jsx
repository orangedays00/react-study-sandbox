import React, { useState, useEffect } from "react";

const LikeButton = () => {
  const [countHook, counterHook] = useState(0);
  const [limit, release] = useState(true);

  const countUpHook = () => {
    counterHook(countHook + 1);
  };

  useEffect(() => {
    console.log("render");
    document
      .getElementById("counterHook")
      .addEventListener("click", countUpHook);
    if (countHook >= 10) {
      counterHook(0);
    }
    return () => {
      console.log("Unmounting");
      document
        .getElementById("counterHook")
        .removeEventListener("click", countUpHook);
    };
  }, [limit]);

  return (
    <>
      <button id={"counterHook"}>いいね数： {countHook}</button>
      <button
        onClick={() => {
          release(!limit);
        }}
      >
        もっといいねを・・・！
      </button>
    </>
  );
};
export default LikeButton;
