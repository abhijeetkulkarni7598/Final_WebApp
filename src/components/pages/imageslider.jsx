import React,{useState} from 'react'
import { Sliderdata } from './sliderdata';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const Imageslider = ({slides}) => {
const [current,setCurrent]=useState(0);
const length=slides.length; //total number of slides
const navigate=useNavigate();

const nextSlide=()=>{
    setCurrent(current === length-1 ? 0 :current+1);
};
const prevSlide=()=>{
    setCurrent(current === 0 ? length-1 :current-1);
};
const goToNextPage=()=>{
    navigate('/nextpage');
}
// console.log(current);
if(!Array.isArray(slides)||slides.length<=0){
    return null;
}
  return (
    <>
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {Sliderdata.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
        <>
        {/* <div className='yes'> */}
            <img src={slide.image} alt='travel image' className='image' />
                {/* <button class="btn">Button</button> */}
            <h2 className="title">{slide.title}</h2>
            <button className='image-button' onClick={goToNextPage} >Button</button>  
            {/* onClick={goToNextPage} */}
        {/* </div> */}
        </>
        )}
        </div>
    ))}     
    </section>
    </>
  )
}

export default Imageslider