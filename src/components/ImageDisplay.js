import React, { Component } from "react";

export default class ImageDisplay extends Component {
  render() {
    let imageContainer = {
      display: "flex",
      flexWrap: "wrap"
    };

    let imageWrapper = {
      flex: "0"
    };

    let style1 = {
      width: 100,
      margin: 10
    };

    let style2 = {
      width: 300,
      margin: 10
    };
    let images = this.props.imageDisplay.map((e, i, a) => {
      let style = a.length > 10 ? style1 : style2;

      return (
        <div style={imageWrapper} key={i}>
          <img style={style} src={e.img_src} alt="rover" />
        </div>
      );
    });
    return (
      <div style={imageContainer}>
        {images}
      </div>
    );
  }
}
