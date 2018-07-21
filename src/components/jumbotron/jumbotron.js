import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        const {backgroundImage, headerText, subHeaderText} = this.props;
        const {containerStyle} = styles;
        <div style={containerStyle}>
            <h1>{headerText}</h1>
            <p>{subHeaderText}</p>
        </div>;

        const styles = {
            containerStyle: {
                backgroundImage: {backgroundImage}
            }
        }
    }
}

export default Jumbotron;