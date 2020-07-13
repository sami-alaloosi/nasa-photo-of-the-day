/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Image(props) {
  return <img src={props.url} />;
}

function App() {
  const [images, setImages] = useState("");

  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=HiRCIgjcULXuND5KQc15tzbGnzDrWmqstWWDa5QA&date=2020-07-12`
    )
    .then((response) => setImages(response.data.url))
    .catch((err) => console.log("there was an error:", err));
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Image url={images} />
    </div>
  );
}

export default App;
