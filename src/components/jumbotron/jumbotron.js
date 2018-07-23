import React, { Component } from 'react';
import bg from '../../res/img/headerBackground1.jpg';

class Jumbotron extends Component {
    render() {
        const styles = {
            containerStyle: {
                backgroundImage: "url(" + bg + ")",
                backgroundSize: 'cover',
                textAlign: 'Center',
                padding: '15%',
                color: 'white'
            },
            headerStyle: {
                fontSize: '300%'
            },
            subHeaderStyle: {
                fontSize: '150%'
            }
        }
        const { backgroundImage, headerText, subHeaderText } = this.props;
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