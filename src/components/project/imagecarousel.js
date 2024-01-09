import React, { useState, useEffect } from 'react';
import './imagecarousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  // Handle auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      if (isMounted) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      setIsMounted(false);
    };
  }, [images.length, interval, isMounted]);

  // Navigate to previous or next slide
  const navigate = (direction) => {
    setCurrentIndex(prevIndex => {
      if (direction === 'prev') {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % images.length;
      }
    });
  };

  return (
    <div className="image-carousel">
      <button 
        className='prevbutton'
        onClick={() => navigate('prev')}
      >
        <FontAwesomeIcon icon={faArrowLeft} size='2x'/>
      </button>
      <div className="image-container">
        <img src={images[currentIndex].url} alt={images[currentIndex].description} />
        <p>{images[currentIndex].description}</p>
        <a className="repobutton" href={images[currentIndex].link} target='__blank' rel="noopener noreferrer">
            Repo
        </a>
      </div>
      <button 
        className='nextbutton'
        onClick={() => navigate('next')}
      >
        <FontAwesomeIcon icon={faArrowRight} size='2x'/>
      </button>
    </div>
  );
};

export default ImageCarousel;