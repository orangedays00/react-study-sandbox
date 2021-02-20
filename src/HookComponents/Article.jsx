import React, { useState } from "react";
import LikeButton from "./LikeButton";

const Article = (props) => {
  const [isPublishedHook, togglePublishedHook] = useState(false);
  return (
    <>
      <h2>{props.title}</h2>
      <label htmlFor="checkHook">販売状態：</label>
      <input
        type="checkbox"
        checked={isPublishedHook}
        id="checkHook"
        onClick={() => togglePublishedHook(!isPublishedHook)}
      />
      <LikeButton />
    </>
  );
};

export default Article;
