import React from 'react';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import "react-vertical-timeline-component/style.min.css";

import { styles } from '../styles';
import { experiences } from '../constants'
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff"
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img 
            src={ experience.icon }
            alt={ experience.company_name }
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >

    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div>
      <motion.dv variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.dv>

      <div>
        <VerticalTimeline className="mt-20 flex flex-col">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={"experience-${index}"} 
              experience={ experience }
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "experience")