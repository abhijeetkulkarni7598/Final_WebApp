import React from "react";
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Imageslider from './imageslider';
import {Sliderdata} from './sliderdata';

export default function Home() {
    return(
        <>
            <Imageslider slides={Sliderdata}/>
            <About/>
            <Services/><br/>
            <Contact/>

        </>
        
    );
}