import React, { Component } from 'react';
import bg from '../../res/img/headerBackground1.jpg';

class Jumbotron extends Component {
	render() {
		const styles = {
			containerStyle: {
				backgroundImage: "url(" + bg + ")",
				textShadow: '-1px 0 #343B41, 0 1px #343B41, 1px 0 #343B41, 0 -1px #343B41',
				backgroundSize: 'cover',
				textAlign: 'Center',
				padding: '15%',
				color: '#EBEBEB'
			},
			headerStyle: {
				fontSize: '300%'
			},
			subHeaderStyle: {
				fontSize: '150%'
			}
		}
		const { headerText, subHeaderText } = this.props;
		const { containerStyle, headerStyle, subHeaderStyle } = styles;
		return (
			<div style={containerStyle}>
				<h1 style={headerStyle}>{headerText}</h1>
				<p style={subHeaderStyle}>{subHeaderText}</p>
			</div>
		);
	}
}

export default Jumbotron;