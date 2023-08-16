import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrapp, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Skill.scss';


const Skill = () => {

  const [experiences, setExperience] = useState([
    {
      year: "2020 - 2022   ", works: [
        { name: 'FrontEnd Developer', company: 'Flave Technologies, Nigeria. (Remote)', desc: 'I co-joined in building a school management application system at Flave Tech and other apps' },
      ]
    },
    {
      year: "2022 - Present", works: [
        { name: 'Software Developer', company: 'Nkowa Okwu LLC, USA. (Remote)', desc: 'I contribute to this app that exposes igbo words dataset, building of igbo api doc, creating a python bot that exports igbo dataset to wikidata' },
      ]
    },
    {
      year: "2023 - 2023   ", works: [
        { name: 'MERN Stack Developer', company: 'Retro Board, USA. (Remote)', desc: 'Here, I worked as a freelancer using next js 13.4 to contribute in building a trello like app' },
      ]
    },
  ]);
  const [skills, setSkills] = useState([
    { name: 'HTML', bgColor: '#edf2f8', imgUrl: images.html, icon: AiFillEye, },
    { name: 'CSS', bgColor: '#edf2f8', imgUrl: images.css, icon: AiFillEye, },
    { name: 'Javascript', bgColor: '#edf2f8', imgUrl: images.javascript, icon: AiFillEye, },
    { name: 'ReactJS', bgColor: '#edf2f8', imgUrl: images.react, icon: AiFillEye, },
    { name: 'Nextjs', bgColor: '#edf2f8', imgUrl: images.next1, icon: AiFillEye, },
    { name: 'NodeJS', bgColor: '#edf2f8', imgUrl: images.node, icon: AiFillEye, },
    { name: 'Express', bgColor: '#edf2f8', imgUrl: images.expressjs, icon: AiFillEye, },
    { name: 'Graphql', bgColor: '#edf2f8', imgUrl: images.graphql, icon: AiFillEye, },
    { name: 'MongoDB', bgColor: '#edf2f8', imgUrl: images.mongoDB, icon: AiFillEye, },
    { name: 'Postgres', bgColor: '#edf2f8', imgUrl: images.postres, icon: AiFillEye, },
    { name: 'Tyescript', bgColor: '#edf2f8', imgUrl: images.typescript, icon: AiFillEye, },
    { name: 'Firebase', bgColor: '#edf2f8', imgUrl: images.firebase, icon: AiFillEye, },
    { name: 'Git', bgColor: '#edf2f8', imgUrl: images.git, icon: AiFillEye, },
    { name: 'Redux', bgColor: '#edf2f8', imgUrl: images.redux, icon: AiFillEye, },
    { name: 'Python', bgColor: '#edf2f8', imgUrl: images.python, icon: AiFillEye, },
    { name: 'Django', bgColor: '#edf2f8', imgUrl: images.django, icon: AiFillEye, },
  ]);

  const experienceYearStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <>
      <h2 className='head-text'>Skills and Experiences.</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'

            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.imgUrl} alt="skills images" />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="app__skills-exp-item"

            >
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, idx) => (
                  <>
                    <motion.div
                      key={idx}
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}

                    >
                      <h4 className="bold-text"><span style={experienceYearStyle}>{experience.year}</span> { " " }{work.name}</h4>
                      <p className="p-text" style={{fontSize: "18px"}}>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrapp(
  MotionWrap(Skill, 'app__skills'),
  'skills',
  'app__whitebg',
);