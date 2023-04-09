import { Component } from "react";
import BlogCard from "./component/BlogCard";
import "./App.css";
import Product from "./component/Product";

class App extends Component {
  state = {
    showBlogs: false,
    blogContent : [
      {
        id: 1,
        title: "Blog title 1",
        content: "Hello world this is blog 1",
        likeCount: 0,
      },
      {
        id: 2,
        title: "Blog title 2",
        content: "Hello world this is blog 2",
        likeCount: 0,
      },
      {
        id: 3,
        title: "Blog title 3",
        content: "Hello world this is blog 3",
        likeCount: 0,
      },
    ],
  };

  

  handleOnClick = () => {
    console.log("clicked");
    this.setState((prevState, preProps) => {
      return { showBlogs: !prevState.showBlogs };
    });
  };

  

  handleLikeClick = (pos) => {
    const updatedContent = this.state.blogContent;
    updatedContent[pos].likeCount = updatedContent[pos].likeCount+1
    this.setState({blogContent:updatedContent})
  };

  render() {
    const showBlogCards = this.state.blogContent.map((card, pos) => {
      return (
        <div className="blog-container" key={card.id}>
          <BlogCard
            id={card.id}
            title={card.title}
            content={card.content}
            likeCount={card.likeCount}
            handleLikeClick={()=>this.handleLikeClick(pos)}
          />
        </div>
      );
    });

    return (
      <div className="app">
        <button className="app-button" onClick={this.handleOnClick}>
          {this.state.showBlogs ? "Hide Blogs" : "Show Blogs"}
        </button>
        {this.state.showBlogs ? <Product /> : null}
      </div>
    );
  }
}

export default App;
