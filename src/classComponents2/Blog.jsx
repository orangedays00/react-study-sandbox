import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    };
  }

  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    });
  };

  render() {
    return (
      <div>
        <Article
          title={"ジーズ太郎"}
          order={3}
          isPublished={!this.state.isPublished}
          author={"Reactコンポーネントの使い方"}
          toggle={() => this.togglePublished()}
        />
        <Article
          title={"ジーズ二郎"}
          order={1}
          isPublished={this.state.isPublished}
          author={"JSXとは"}
        />
      </div>
    );
  }
}

export default Blog;
