import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles.js'
import { ComputersCanvas } from './canvas'
import AvatarCanvas from '../AvatarCanvas.jsx';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">     

        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          </div>

          <div className = {`xl:mt-22 top-100 flex xl:flex-row flex-col gap-10`}>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm&nbsp;
                <span className="text-[#915eff]">Cyril</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I engineer immersive 3D 
                <br className="sm:block-hidden"/> software experiences for AR, VR, & MR 
              </p>
            </div>

            <AvatarCanvas />
          </div>
        </div>

        

      <div className="absolute xs:bottom-15 bottom-25 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero