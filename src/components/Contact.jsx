import React, { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { motion } from 'framer-motion';

import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (elem) => {
    const { target } = elem;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (elem) => {
    elem.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_t4mls5a", 
      "template_zr8oj5o",
      {
        from_name: form.name,
        to_name: "Cyril Medabalimi",
        from_email: form.email,
        to_email: "cyrildmed@gmail.com",
        message: form.message,
      },
      "_boTLljZ-U6j9o8zc"
    )
    .then(
      () => {
        setLoading(false);
        alert("Thanks for your message! I'll get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        alert("Something seems to have gone wrong. Please try again.");
      }
    );
  };

  return (
    <div className = {`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>E-mail</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea 
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
};

export default SectionWrapper(Contact, "contact");