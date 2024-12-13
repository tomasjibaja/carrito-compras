import React from 'react'
import { useState } from 'react';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle, IoIosCloseCircle } from "react-icons/io";
import './SliderModal.css'


const SilderModal = ({ product, setShowImages }) => {

  const images = product?.images;
  const [image, setImage] = useState(0);

  return (
    <div className='modal'>
      <div className="slider">
        {image > 0 && <IoMdArrowDropleftCircle className='left-arrow pointer absolute hover' onClick={() => setImage(image - 1)} />}
        {image < (images?.length - 1) && <IoMdArrowDroprightCircle className='right-arrow pointer absolute hover' onClick={() => setImage(image + 1)} />}
        <img src={images[image]} />
        <IoIosCloseCircle className='close-modal pointer absolute hover' onClick={() => setShowImages(false)} />
      </div>
      
    </div>
  )
}

export default SilderModal
