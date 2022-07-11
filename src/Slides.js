import { useState } from "react";
import { SlidesArray } from "./SlidesArray";
import Nav from "./Nav";
import React from 'react';



function Slides() {

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
<div>
    <Nav RestartHandler={RestartHandler} PrevHandler={PrevHandler} NextHandler={NextHandler} Slideno={Slideno} SlidesArraylength={SlidesArray.length-1}/>

  <div id="slide" className="card text-center">
      <h2 data-testid="title">Slide Title Here</h2>
        <div>
          <h1> {SlidesArray[Slideno].headline} </h1>   
          <p> {SlidesArray[Slideno].content}  </p>     
        </div>
  </div>
</div>
);

}

export default Slides;
  