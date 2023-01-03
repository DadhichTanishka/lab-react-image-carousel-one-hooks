import React, { useState } from "react";
import "./Carousel.css";
import { Images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currNo,changeNo]=useState(0)
    console.log(Images)
    return(
        
        <div id="page">
           
            <div id="title">
                {Images[currNo].title}
            </div>
            <div id="images">
            <img src={Images[currNo].img}></img>
            </div>
            <div id="sub">
                {Images[currNo].subtitle}
            </div>
            <div id="change">
                 <button onClick={()=>changeNo(currNo-1)}> <ArrowBackIosIcon  /></button>
                 <button onClick={()=>changeNo(currNo+1)}><ArrowForwardIosIcon/></button>
            </div>
           
                
            
        </div>
    )
}

export default Carousel;