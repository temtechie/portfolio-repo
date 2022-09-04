import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import {images} from '../../constants'
import { AppWrapp, MotionWrap } from '../../wrapper';

const abouts = [
  { title: 'Web Developer', description: 'I create and maintain dynamic and scalable web applications', imgUrl: images.about01 },
  { title: 'Front End Developer', description: 'I take charge in developing website with great user experience', imgUrl: images.about02, },
  { title: 'Media Query', description: 'I love to make my web applications very responsive to fit in any device size.', imgUrl: images.about03 },
  { title: 'Web Animations', description: 'I create cool web animations with css and other libraries', imgUrl: images.about04 },

]


const About = () => {

  return (
    <>
      <h2 className='head-text'> Solving a <span> problem </span> <br />  means, creating<span>  good product</span> </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapp(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);