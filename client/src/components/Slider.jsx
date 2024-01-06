import React, { useEffect, useState } from 'react'


const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    img:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    img:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
];

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(
        () =>
          setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
        4000
      );
      return () => clearInterval(interval);
    }, []);
  return (
   <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
    <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
      <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
        {data[currentSlide].title}
      </h1>
      <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
    </div>
    <div className="w-full flex-1 relative">
      <img src={data[currentSlide].img} alt="" className='object-cover'/>
    </div>
   </div>
  )
}

export default Slider


   