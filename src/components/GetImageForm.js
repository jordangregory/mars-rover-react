import React, { Component } from "react";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";

const API_KEY = "UbnlR4InXb6dYWQLuw0n78nXxjEEysoWUVRpqhqX";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    };
  }

  handleCamera = e => {
    this.setState({ camera: e.target.value });
  };
  handleRover = e => {
    this.setState({ rover: e.target.value });
  };
  handleSol = e => {
    this.setState({ sol: e.target.value });
  };
  fetchRoverImage = e => {
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    fetch(imageUrl)
      .then(response => {
        console.log("response: ", response);
        return response.json();
      })
      .then(data => {
        console.log("data: ", data);
        this.setState({ images: data.photos });
        console.log("state images: ", this.state.images);
      });
  };

  render() {
    let container = {
      padding: 100
    };
    let fieldWrapper = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    };
    let fieldItself = {
      textAlign: "center"
    };

    let inputDivs = {
      margin: 10
    };

    let labelTags = {
      margin: 10,
      color: "white",
      fontSize: 25
    };
    return (
      <div style={container}>
        <div style={fieldWrapper}>
          <div style={fieldItself}>
            <div style={inputDivs}>
              <label style={labelTags} htmlFor="rover">
                Rover
              </label>
              <select
                onChange={this.handleRover}
                id="rover"
                value={this.state.value}
              >
                <option value="Curiosity">Curiosity</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Spirit">Spirt</option>
              </select>
            </div>

            <div style={inputDivs}>
              <label style={labelTags} htmlFor="camera">
                Camera Type
              </label>
              <select
                onChange={this.handleCamera}
                id="rover"
                value={this.state.value}
              >
                <option value="fhaz">FHAZ (Front Hazard)</option>
                <option value="rhaz">RHAZ (Rear Hazard)</option>
                <option value="navcam">NAVCAM (Navigation Cam)</option>
              </select>
            </div>

            <div style={inputDivs}>
              <label style={labelTags} htmlFor="sol">
                Martian Sol: 1000-2000
              </label>
              <input
                type="number"
                onChange={this.handleSol}
                max="2000"
                min="1000"
                value={this.state.value}
              />
            </div>

            <GetImageButton fetchRoverImage={this.fetchRoverImage} />

            <ImageDisplay imageDisplay={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
}
