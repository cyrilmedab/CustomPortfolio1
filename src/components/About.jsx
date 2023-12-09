import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { services } from "../constants"
//import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled XR software engineer with experience in Unity3D, React, and Three.js. A former bioengineer, I left the field to pursue my passion for XR and changing the way people interact both with tech and each other! I thrive in fast-paced, dynamic environments where I have to adopt an adaptable growth mindset, and I love to collaborate with other professionals and enthusiasts. Let's work together to build the cutting-edge!
      </motion.p>
    </div>

  )
}

export default About