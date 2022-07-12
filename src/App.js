import './App.css';
import './style.css';
import Slides from './Slides';
import Nav from './Nav';
import { useState } from "react";
import { SlidesArray } from "./SlidesArray";
import Footer from './footer';

function App() {

  const [Slideno,setSlideno]=useState(0);

function RestartHandler()
  {
    setSlideno(0);
  }
function PrevHandler()
  {
    var value=Slideno-1;
    setSlideno(value);
  }
function NextHandler()
{
    var value=Slideno+1;
    setSlideno(value);
}

  return (
    <div className="App">
      <Nav RestartHandler={RestartHandler} PrevHandler={PrevHandler} NextHandler={NextHandler} Slideno={Slideno} SlidesArraylength={SlidesArray.length-1}/>
      <Slides Slideno={Slideno}/>
      <Footer/>
    </div>
  );
}

export default App;
