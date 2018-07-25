import React, { Component } from 'react';
import BlogPost from '../blog-post/blog-post';

class Blogs extends Component {
	render() {
		return (
			<BlogPost postTitle="Test Title">This is a test</BlogPost>
		)
	}
}

export default Blogs;