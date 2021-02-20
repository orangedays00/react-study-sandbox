import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const authorName = "ジーズ太郎";
    // const titleName = "Reactコンポーネントの使い方";
    return (
      <div>
        {/* <Article
          title={titleName}
          order={3}
          isPublished={false}
          author={authorName}
        /> */}
        <Article
          title={"ジーズ太郎"}
          order={3}
          isPublished={false}
          author={"Reactコンポーネントの使い方"}
        />
        <Article
          title={"ジーズ二郎"}
          order={1}
          isPublished={true}
          author={"JSXとは"}
        />
      </div>
    );
  }
}

export default Blog;
