import { Component } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "book", // book | blog | course
    };
  }

  renderContent() {
    switch (this.state.currentView) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <h3>No View Selected</h3>;
    }
  }

  render() {
    const { currentView } = this.state;

    return (
     <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Blogger App</h1>
        <button onClick={() => this.setState({ currentView: "book" })}>
          Book Details
        </button>
        <button onClick={() => this.setState({ currentView: "blog" })}>
          Blog Details
        </button>
        <button onClick={() => this.setState({ currentView: "course" })}>
          Course Details
        </button>

        <hr />

        {/* Way 1: Element Variable */}
        {this.renderContent()}

        {/* Way 2: Inline If-Else */}
        {/* {currentView === "book" ? <BookDetails /> : <CourseDetails />} */}

        {/* Way 3: Short-circuit evaluation */}
        {/* {currentView === "blog" && <BlogDetails />} */}
      </div>
     </div>  
    );
  }
}

export default App;
