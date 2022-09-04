import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrapp, MotionWrap } from '../../wrapper';

import { images } from '../../constants';

import './Testimonial.scss';

const Testimonial = () => {

  const [brands, setBrands] = useState([
    {name: 'Flave Technologies', imgUrl: images.flavelogo },
    {name: 'Flave Technologies', imgUrl: images.flavelogo },
    {name: 'Flave Technologies', imgUrl: images.flavelogo },
  ]);
  const [testimonials, setTestimonials] = useState([
    { name: 'Favour Emmanuel', bgColor: '#edf2f8', imgUrl: images.flavepic, icon: HiChevronLeft, feedback: 'Talented and passionate software engineer with thorough knowledge in software engineering from inside and out.', company: 'Flave Technologies' },
    { name: 'Wisdom Dominic Joseph', bgColor: '#edf2f8', imgUrl: images.wisdompic, icon: HiChevronLeft, feedback: 'Great Developer, Shows initiative with developing new ways of thinking to improve projects or company performance', company: 'WebHub Services'},
    { name: 'Seun Gbenle', bgColor: '#edf2f8', imgUrl: images.seunpic, icon: HiChevronLeft, feedback: 'Tech enthusiastic, contributes to the overall performance of the company through consistent and high-quality work', company: 'Flave Technologies'},
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

const test = testimonials[currentIndex];

const handleClick = (index) => {
  setCurrentIndex(index)
}

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={test.imgUrl} alt="testimonials" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrapp(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);