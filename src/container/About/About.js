import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants'
import { AppWrapp, MotionWrap } from '../../wrapper';

const abouts = [
  {
    title: 'Front-end Developer',
    description: `I design user-friendly websites and applications using HTML, CSS, and JavaScript. Working closely with backend developers, I transform designs into functional digital solutions for great user experiences`,
    imgUrl: images.about03
  },
  {
    title: 'Back-end Developer',
    description: `I design server architecture, databases, and APIs, ensuring seamless web performance. I manage authentication, optimize for efficiency, and collaborate with front-end for smooth data exchange`,
    imgUrl: images.about02,
  },
  {
    title: 'DataBase Handling',
    description: `implementing, and maintaining databases that store and organize crucial data for applications. Using technologies like SQL or NoSQL, I ensure efficient data retrieval and storage.`,
    imgUrl: images.about04
  },
  {
    title: 'AWS and Docker',
    description: ` Manages cloud infrastructure using AWS services and containerization with Docker. By leveraging AWS resources, I architect scalable solutions. Additionally, I containerize applications with Docker.`,
    imgUrl: images.about01
  },

]


const About = () => {

  return (
    <>
      <h2 className='head-text'> Solving a <span> problem </span> <br />  means, creating<span>  good product</span> </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
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