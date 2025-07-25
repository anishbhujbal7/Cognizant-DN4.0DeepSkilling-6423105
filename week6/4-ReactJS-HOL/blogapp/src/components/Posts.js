import React from 'react';
import Post from '../components/Post';

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const posts = data.map(post => new Post(post.id, post.title, post.body));
                this.setState({ posts: posts });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }

    componentDidCatch(error, errorInfo) {
        alert(`Error occurred: ${error.message}`);
    }
}

export default Posts;