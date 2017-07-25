import React, { Component } from "react";

export default class GetImageButton extends Component {
  render() {
    let buttonStyling = {
      width: 200
    };
    return (
      <div>
        <button onClick={this.props.fetchRoverImage} style={buttonStyling}>
          Get Rover Image
        </button>
      </div>
    );
  }
}
