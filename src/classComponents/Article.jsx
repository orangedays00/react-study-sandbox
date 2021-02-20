import React from "react";

const Article = (props) => {
  let publisheState = "";
  if (props.isPublished) {
    publisheState = "販売中";
  } else {
    publisheState = "販売終了";
  }
  return (
    <>
      <div>{props.title}</div>
      <div>第{props.order}刷</div>
      <div>著者：{props.author}</div>
      <div>{publisheState}</div>
    </>
  );
};

export default Article;
