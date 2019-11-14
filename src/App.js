import React from "react";
import "./App.css";
import Greeting from "./components/greeting";
import ImageAlbum from './components/imageAlbum'
import gambarnya from './assets/logos/Orochimaru2.jpg'

function App() {
  return (
    <div className="App">
      <Greeting name="dean"/> {/*ini adalah komponen*/} 
      <Greeting name="danu"/>
      <Greeting name="iqbal"/>
      <Greeting name="bagus"/>

      <ImageAlbum imageSrc={gambarnya} />
    </div>
  );
}

export default App;
