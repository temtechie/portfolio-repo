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
      year: 2020, works: [
        { name: 'FrontEnd Developer', company: 'Flave Technologies', desc: 'I am as a Frontend Developer as Flave Technologies' },
      ]
    }]);
  const [skills, setSkills] = useState([
    { name: 'Javascript', bgColor: '#edf2f8', imgUrl: images.javascript, icon: AiFillEye, },
    { name: 'ReactJS', bgColor: '#edf2f8', imgUrl: images.react, icon: AiFillEye, },
    { name: 'NodeJS', bgColor: '#edf2f8', imgUrl: images.node, icon: AiFillEye, },
    { name: 'Tyescript', bgColor: '#edf2f8', imgUrl: images.typescript, icon: AiFillEye, },
    { name: 'Git', bgColor: '#edf2f8', imgUrl: images.git, icon: AiFillEye, },
    { name: 'Redux', bgColor: '#edf2f8', imgUrl: images.redux, icon: AiFillEye, },
  ]);

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
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
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
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
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