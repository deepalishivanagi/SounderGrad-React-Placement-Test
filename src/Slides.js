import { SlidesArray } from "./SlidesArray";
import React from 'react';
import './Slides.css';
import { IconButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function Slides(props) {

return (
<div className="Slide-maindiv">
  <div id="slide" className="card text-center">
      <h2 data-testid="title">Successful Businesspeople to know</h2>
        <div className="slide-container">
          <IconButton><Avatar alt="image" src={SlidesArray[props.Slideno].src}  sx={{width:"6rem",height:"6rem",backgroundSize:"cover"}} /> </IconButton>
          <h1> {SlidesArray[props.Slideno].headline} </h1>   
          <p> {SlidesArray[props.Slideno].content}  </p>     
        </div>
  </div>
</div>
);

}

export default Slides;
  