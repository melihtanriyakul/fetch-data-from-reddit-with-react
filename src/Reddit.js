import React, { Component } from 'react';
import axios from 'axios';

export default class Reddit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get(this.props.givenUrl)
        .then(res => {
            const posts = res.data.data.children.map(obj => {
                console.log(obj.data.url);
                return obj.data
            });
            this.setState({ posts });
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.givenUrl}</h1>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id}><a href={post.url}>{post.title}</a></li>
                    ))}
                </ul>
            </div>
        );
    }
}