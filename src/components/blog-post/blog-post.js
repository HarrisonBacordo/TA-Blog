import React, { Component } from 'react';

class BlogPost extends Component {
    render() {
        const { postTitle } = this.props;
        return (
            <div>
                <h2>{postTitle}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default BlogPost;