/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ textAlign: "center" }}>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

function App() {
  const text1 =
    "Where do comet tails come from? There are no obvious places on the nuclei of comets from which the jets that create comet tails emanate. One of the best images of emerging jets is shown in the featured picture, taken in 2015 by ESA's robotic Rosetta spacecraft that orbited Comet 67P/Churyumov-Gerasimenko (Comet CG) from 2014 to 2016. The picture shows plumes of gas and dust escaping numerous places from Comet CG's nucleus as it neared the Sun and heated up. The comet has two prominent lobes, the larger one spanning about 4 kilometers, and a smaller 2.5-kilometer lobe connected by a narrow neck. Analyses indicate that evaporation must be taking place well inside the comet's surface to create the jets of dust and ice that we see emitted through the surface. Comet CG (also known as Comet 67P) loses in jets about a meter of radius during each of its 6.44-year orbits around the Sun, a rate at which will completely destroy the comet in only thousands of years.";
  const text2 =
    "In 2016, Rosetta's mission ended with a controlled impact onto Comet CG's surface.   Comet NEOWISE from Around the Globe: Notable Images Submitted to APOD";

  const text = text1 + text2;
  const [images, setImages] = useState(
    "https://apod.nasa.gov/apod/image/2007/Comet67P_Rosetta_960.jpg"
  );
  const [date, setDate] = useState(`2020-07-12`);
  const [explanation, setExplanation] = useState(text);
  const [hdurl, setHdurl] = useState(
    "https://apod.nasa.gov/apod/image/2007/Comet67P_Rosetta_1724.jpg"
  );
  const [title, setTitle] = useState("Comet CG Creates Its Dust Tail");

  function onSearchSubmit(term) {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=HiRCIgjcULXuND5KQc15tzbGnzDrWmqstWWDa5QA&date=${term}`
      )
      .then((response) => {
        setImages(response.data.url);
        setDate(response.data.date);
        setExplanation(response.data.explanation);
        setHdurl(response.data.hdurl);
        setTitle(response.data.title);
      })
      .catch((err) => console.log("there was an error:", err));
  }

  return (
    <div className="App">
      <SearchBar onSubmit={onSearchSubmit} />
      <img src={images} alt="Nasa images" />
      <h3>{title}</h3>
      <span>{date}</span>
      <p>{explanation}</p>
      <div>HD URl: {hdurl} </div>
    </div>
  );
}

export default App;
