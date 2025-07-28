import { Component } from "react";
import Post from "./Post"; 
import './App.css'
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async loadPosts() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const response = await data.json();

      const postObjects = response.map(post =>
        new Post(post.userId, post.id, post.title, post.body)
      );

      this.setState({ posts: postObjects });
      
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  }

  componentDidMount() {
    console.log("component mounted");
    this.loadPosts();
  }

  render() {
    return (
      <>
        <h1>Blog App</h1>
        <div className="box-center">
          {this.state.posts.map(post => (
            <div key={post.id} style={{ marginBottom: '20px', width : '500px',padding: '10px', border: '1px solid #ccc' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </>
    );
  }

  componentDidCatch(error, info) {
    console.error("Caught error:", error, info);
  }
}

export default Posts;
