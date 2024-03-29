import React from 'react';
import { motion } from 'framer-motion';
import { AppWrapp } from '../../wrapper'

import './Header.scss';

import { images } from '../../constants';

const scaleVariants = {
  whileInView : {
    scale: [0 ,1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello I'm</p>
              <h1 className='head-text'>Temple Ndukwu</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Developer,</p>{" "}
            <p className='p-text'> Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.temple_header} alt="profile image" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          className="overlay_circle"
          alt="profile_circle"
        />
      </motion.div>

      <motion.div 
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.node].map((circle, index) => (
          <div className='circle-cmp app__flex' key={index}>
            <img src={circle} alt="circle image"/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapp(Header, 'home');