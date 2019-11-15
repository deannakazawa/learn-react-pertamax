import React from "react";
import "./App.css";
import Greeting from "./components/greeting";
import ImageAlbum from './components/imageAlbum'
import gambarnya from './assets/logos/Orochimaru2.jpg'
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
      
      <Greeting name="dean"/> {/*ini adalah komponen*/} 
      <p className="app-intro">Jumat Berkah, semoga apa yang kita kerjakan senantiasa diberi kemudahan dari Allah SWT</p>
      <Counter/>
      <ImageAlbum imageSrc={gambarnya} />
    </div>
  );
}

export default App;
