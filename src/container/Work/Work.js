import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrapp, MotionWrap } from '../../wrapper';
import { images } from '../../constants';


import './Work.scss'

const Work = () => {

  const [works, setWorks] = useState([
    {
      title: 'React Color changer App',
      tags: 'React App',
      imgUrl: images.retroBoard,
      Description: 'Created a react app that changes to input value color name',
      link: '#',
      code: '/'
    },
    {
      title: 'React App',
      tags: 'Web App',
      imgUrl: images.about01,
      Description: 'Involved in developing a school system web app for all school activities',
      link: '#',
      code: '/'
    },
    {
      title: 'Node Js',
      tags: 'Node JS',
      imgUrl: images.node,
      Description: 'Created a simple nodejs api',
      link: '#',
      code: '/'
    },
    {
      title: 'Node Js',
      tags: 'Node JS',
      imgUrl: images.node,
      Description: 'Created a simple nodejs api',
      link: '#',
      code: '/'
    },
  ]);

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([
    {
      title: 'Retro Board App',
      tags: 'Retro Board App',
      imgUrl: images.retroBoard,
      Description: 'This is a restropective mgt app, created using Next.js,React, Node, Firebase etc.',
      link: '#', code: '/'
    },
    {
      title: 'Igbo API Doc Site',
      tags: 'Igbo API Doc Site',
      imgUrl: images.igboAPIDoc,
      Description: 'This the Igbo api Doc app, Here i used nextra, next, react, tailwind etc in building the app',
      link: '#', code: '/'
    },
    {
      title: 'Igbo API Admin',
      tags: 'Igbo API Admin',
      imgUrl: images.igboAPIAdmin,
      Description: 'Co-joined in building the Igbo API Admin, using Chakra UI, MUI, Tailwind, firebase, mongodb etc.',
      link: '#', code: '/'
    },
    {
      title: 'Nkowa Okwu Dictionary',
      tags: 'Nkowa Okwu Dictionary',
      imgUrl: images.NkowaOkwu,
      Description: 'This is the main Igbo API Igbo lang. dictionary app. i join in maintaing the Nkowa Okwu Dictionary',
      link: '#', code: '/'
    },
  ]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const workDividerStyle = {
    width: '50%', 
    height: '2px',
    backgroundColor: '#313bac', 
    margin: 'auto',
  }
  const workTag = {
    backgroundColor: "rgba(240, 237, 237, 0.9)",
  }

  return (
    <>
      <h2 className='head-text'>Recent Work <span>Portfolio</span> </h2>
      <div className='work-divider' style={workDividerStyle} />
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex'
            key={index}
          >
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className="bold-text">{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.Description}</p>
              <div className='app__work-tag app__flex' style={workTag}>
                <p className='p-text' >{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrapp(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);