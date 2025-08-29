export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Experience',
      href: '#experience',
    },
    {
      id: 4,
      name: 'Projects',
      href: '#work',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];

// Rest of your constants stay the same...
  export const myProjects = [
    {
      title: 'GatherU',
      desc: 'GatherU is a comprehensive event management platform designed specifically for university clubs. As Co-Technical Lead, I guided a team of 10 developers to create this full-stack solution using Django, React, and PostgreSQL. The platform features intuitive event scheduling, real-time RSVP functionality, and robust club profile management. A standout feature is the gamified engagement system that tracks student participation and has successfully increased club event attendance by 30%. GatherU solves the challenge of fragmented club communications and event planning by providing a centralized platform that enhances campus community engagement.',
      subdesc: 'Built with Django, React, and PostgreSQL, GatherU streamlines university club event management with features like interactive availability scheduling, real-time RSVPs, and engagement metrics. The implemented gamification system significantly boosts student participation across campus organizations.',
      href: 'https://github.com/hpitta26/club-event-hub', 
      texture: '/textures/project/Project6.png', // You'll need to add this image
      logo: '/assets/p6logo.png', // You'll need to create this logo
      logoStyle: {
        backgroundColor: '#4A90E2',
        background:
          'linear-gradient(0deg, #4A90E250, #4A90E250), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(100, 180, 255, 0.8) 100%)',
        border: '0.2px solid rgba(100, 180, 255, 1)',
        boxShadow: '0px 0px 60px 0px rgba(60, 120, 200, 0.3)',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Django',
          path: '/assets/django.png',
        },
        {
          id: 3,
          name: 'PostgreSQL',
          path: '/assets/postgresql.png',
        }
      ],
    },


    {
      title: 'Emotion Recognition',
      desc: 'Emotion Recognition Model is an advanced AI-powered system designed to analyze and classify facial expressions in real time. Utilizing the power of TensorFlow, OpenCV, and MobileNetV2, this model accurately detects faces and categorizes emotions into seven distinct classes: Angry, Disgust, Fear, Happy, Sad, Surprise, and Neutral. Built with a custom data generator and optimized for AMD GPUs using DirectML, the model efficiently processes images and videos, delivering fast and reliable emotion predictions. Whether for research, human-computer interaction, or AI-driven applications, this tool provides a seamless and intuitive way to interpret human emotions through deep learning.',
      subdesc:'Built with TensorFlow, OpenCV, and MobileNetV2, the Emotion Recognition Model leverages transfer learning and a custom data generator to classify facial expressions with high accuracy. Optimized for AMD GPUs using DirectML, it processes images and videos efficiently, providing real-time emotion detection.',
      href: 'https://github.com/GeorgeU029/emotion_-recognition',
      texture: '/textures/project/Project5.png',
      logo: '/assets/p5logo.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #A560F550, #A560F550), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(180, 150, 255, 0.8) 100%)',
        border: '0.2px solid rgba(180, 150, 255, 1)',
        boxShadow: '0px 0px 60px 0px rgba(120, 60, 200, 0.3)',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.svg',
        },
        {
          id: 2,
          name: 'Tensorflow',
          path: '/assets/tensorflow.png',
        },

      ],
    },
  
    {
      title: 'League Of Legends Stat Tracker',
      desc: 'LeagueStats is a comprehensive platform for League of Legends players to explore and visualize their in-game performance. Built as a full-stack web application, it combines the power of React and Python to deliver an intuitive and dynamic user experience. With seamless integration of the Riot Games API, LeagueStats fetches real-time data, showcasing detailed player statistics, including champion performance, win rates, and match history. Designed for gamers of all skill levels, it allows users to search and compare stats effortlessly, offering a unique tool to analyze and improve gameplay.',
      subdesc:
        'Built as a full-stack web application using React, Python, Flask AND Material UI. LeagueStats delivers real-time player statistics and match insights with seamless API integration and a user-friendly design.',
      href: 'https://myleagueoflegendsstats.netlify.app/',
      texture: '/textures/project/Project1.2.PNG',
      logo: '/assets/project-one-logo.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Python',
          path: '/assets/python.svg',
        },
        {
          id: 3,
          name: 'Github',
          path: '/assets/github (1).png',
        },

      ],
    },
    {
      title: 'Code Zone - Learn, Build, and Empower',
      desc: 'CodeBase is an innovative learning platform designed to improve students proficiency in Data Structures and Algorithms (DSA) using spatial recall-based techniques. By delivering targeted notifications and interactive problem-solving sessions, CodeBase helps users retain complex concepts more effectively. Built as a collaborative effort, the application features seamless integration between a React-based frontend and a Node.js-powered backend, providing a smooth and engaging user experience tailored for aspiring software engineers.',
      subdesc:
        'Developed as a collaborative project using React, Node.js, and a custom notification system, CodeBase combines modern web technologies to help students enhance their DSA skills through spatial recall-based learning.',
      href: 'https://github.com/Erickferpinedo/Code-Zone',
      texture: '/textures/project/Project2.PNG',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Node.js',
          path: '/assets/node-js.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongo-DB-logo.png',
        },
      ],
    },
    {
      title: 'Vida Audio - Music Visualize',
      desc: 'The Music Visualizer is a dynamic and immersive web application that brings music to life through real-time visual effects. Designed for a hackathon, it leverages cutting-edge audio analysis tools to transform sound into stunning visual displays, creating an interactive experience that resonates with every beat. The visualizer seamlessly synchronizes with any audio input, delivering smooth and captivating animations that react instantly and accurately to the music.',
      subdesc:'Built with HTML, CSS, and JavaScript, the Music Visualizer harnesses the Web Audio API to create real-time, responsive visual effects, offering a seamless fusion of technology and art.',
      href: 'https://vidaaudio.us/',
      texture: '/textures/project/Project3.PNG',
      logo: '/assets/vidaAudioLogo.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          path: '/assets/javascript-logo.webp',
        },
        {
          id: 2,
          name: 'HTML',
          path: '/assets/html-logo.png',
        },
        {
          id: 3,
          name: 'css',
          path: '/assets/css-3-logo-png-transparent.png',
        },
      ],
    },
    {
      title: 'Population Visualization',
      desc: 'The Population Visualization project is an interactive data visualization tool that brings global population data to life through dynamic, visually appealing graphs and charts. Built with Python and Pygal, it processes and structures complex datasets to deliver clear and insightful representations of population sizes across countries. Designed with an emphasis on usability and performance, the application provides a seamless user experience with efficient data parsing and rendering, making it an essential tool for understanding and exploring population trends worldwide.',
      subdesc:'Built with Python and Pygal, the Population Visualization leverages advanced data processing and visualization techniques to transform raw population data into engaging, interactive graphs, offering a seamless blend of technology and clarity.',
      href: 'https://github.com/GeorgeU029/real_data_visualizer',
      texture: '/textures/project/Project4.png',
      logo: '/assets/EARTHHH.jpg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.svg',
        },
      ],
    },
  
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];