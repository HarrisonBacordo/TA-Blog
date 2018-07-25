import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
	render() {
		return (
			<ul className="list">
				<li className="listItem">Blog</li>
				<li className="listItem">About</li>
			</ul>);
	}
}

export default NavBar;