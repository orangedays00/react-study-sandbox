import React from "react";
import LikeButton from "./LikeButton";

const Article = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <label htmlFor="check">販売状態：</label>
      <input
        type="checkbox"
        checked={props.isPublished}
        id="check"
        onClick={() => props.toggle()}
      />
      <LikeButton like={props.count} />
    </>
  );
};

export default Article;
