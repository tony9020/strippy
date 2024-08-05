import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  images?: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = window.setTimeout(nextSlide, 500);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, images.length]);

  return (
    <div className="flex h-screen justify-evenly overflow-hidden">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Sketch ${index + 1}`}
          className="absolute  h-3/6 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default Carousel;
