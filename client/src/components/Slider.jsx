import React from 'react'

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
    <div>Slider</div>
  )
}

export default Slider


   