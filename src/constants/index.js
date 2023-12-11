import {
    mobile,
    backend,
    creator,
    web,
    unity,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    firebase,
    meta,
    starbucks,
    tesla,
    shopify,
    fresenius,
    synlogic,
    entrada,
    moodme,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "XR Software Engineer",
      icon: web,
    },
    {
      title: "Unity3D Developer",
      icon: mobile,
    },
    {
      title: "React + Three Developer",
      icon: backend,
    },
    {
      title: "Fullstack Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Bioanalytical Co-op",
      company_name: "Synlogic",
      icon: synlogic,
      iconBg: "#383E56",
      date: "Mar 2018 - Aug 2018",
      points: [
        "Decreased by 99% (~3 hours to 5 seconds) analytical report generation time through an independently developed tool that automatically stylized reports according to the preferences of other departments.",
        "Discovered several new avenues for biomarker discovery and identification through the research and creation of an untargeted metabolomics platform based on HRAM data dependent acquisition.",
      ],
    },
    {
      title: "Systems Co-op",
      company_name: "Fresenius Medical Care",
      icon: fresenius,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Jun 2019",
      points: [
        "Improved by 18% the vacuum failure rate of critical pressure sensors through identification of a minute flaw in the sensors' housing and then machining and prototyping the solution.",
        "Successfully conducted both hardware and software verification and validation of over 20 large-scale, next-generation home dialysis devices.",
        "Analyzed large data sets of niche information and manipulated them into digestible presentations for intra- and inter-departmental meetings.",
      ],
    },
    {
      title: "Bioanalytical Research Associate",
      company_name: "Entrada Therapeutics",
      icon: entrada,
      iconBg: "#383E56",
      date: "Sep 2021 - Dec 2022",
      points: [
        "Reduced the required hands-on time for assay preparation by 40% through the efficient programming of a liquid handler routine, leading to an increased max sample throughput.",
        "Lead the transition of nearly 100 physical lab reports as well as advanced tracking of 1000s of samples to an ELN, developing the structural standards for improved communication and collaboration.",
        "Bioanalytical sample preparation, data acquisition, and analysis to support multiple rapidly advancing pipelines in a fast-paced, result-oriented environment.",
        "Accurately completed 100s of quantification, method development, and method qualification assays on various biological matrices using SCIEX 4500, 6500, and 6600 systems.",
      ],
    },
    {
      title: "Software Developer, Unity",
      company_name: "MoodMe",
      icon: moodme,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Present",
      points: [
        "Developing and maintaining a variety of applications for Unity-based AR experiences and AI emotional recognition",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };