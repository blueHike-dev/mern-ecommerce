import React, { useEffect, useState } from 'react'
import { sliderItems } from '../data';



const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(
        () =>
          setCurrentSlide((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1)),
        4000
      );
      return () => clearInterval(interval);
    }, []);
  return (
   <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] lg:flex-row bg-fuchsia-50">
    <div className="flex-1 flex items-center justify-center flex-col gap-8 text-blue-500 font-bold">
      <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
        {sliderItems[currentSlide].title}
      </h1>
      <button className="bg-red-400 text-white py-3 px-6">Order Now</button>
    </div>
    <div className="w-full flex-1 relative mt-3">
      <img src={sliderItems[currentSlide].img} alt="" style={{width: '40rem', height: '40rem'}}/>
    </div>
   </div>
  )
}

export default Slider;


   