export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'About',
    href: '/about',
  },
  {
    id: 3,
    name: 'Work',
    href: '/work',
  },
  
];

export const myWorks = [
  {
    title: 'VR Malaysia FestiWorlds - Virtual Reality PC-based Application',    
    bgImage:'/assets/vrfest.png',
    slug: 'vr-malaysia-festiworlds',
    desc: 'VR Malaysia FestiWorlds is a fully immersive VR application for VR headsets, allowing users to explore festival environments and experience cultural amusement rides.',
    subdesc:
      'Implemented realistic and creative 3D models, animations, visual effects and sound effects to enhance the overall user experience.',
    href: '/projects/vr-malaysia-festiworlds',
    logo: '/assets/VrlogoApp.png',
    logoStyle: {
      backgroundColor: 'rgba(255, 249, 217, 0.3)',         // 半透明米黄色
      border: '0.2px solid rgba(255, 249, 217, 0.5)',       // 较明显的边框
      boxShadow: '0px 0px 60px 0px rgba(255, 249, 217, 0.4)', // 柔和光晕
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/Unity.png',
      },
      {
        id: 2,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
      {
        id: 3,
        name: 'Blender',
        path: '/assets/Blender.png',
      },
      
    ],
  },
  {
    title: 'Bean to Brew - Virtual Reality PC-based Application',
    slug: 'bean-to-brew',
    bgImage:'/assets/vrb2b.png',
    desc: 'Bean to Brew is a VR barista training application for UTHM students in Technical and Vocational Education and Training (TVET).',    
    subdesc:
      ' Engineered intuitive VR interactions, including hand tracking and gesture-based object manipulation, to simulate realistic coffee-making processes.',
    href: '/projects/bean-to-brew',
    logo: '/assets/VrCoffee.png',
    logoStyle: {
      backgroundColor: 'rgba(107, 158, 153, 0.3)', // R,G,B,A（A = 透明度）
      border: '0.2px solid rgba(107, 158, 153, 0.5)',
      boxShadow: '0px 0px 60px 0px rgba(47, 103, 182, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/Unity.png',
      },
      {
        id: 2,
        name: 'Figma',
        path: 'assets/figma.svg',
      },
      {
        id: 3,
        name: 'Blender',
        path: '/assets/Blender.png',
      },
    ],
  },
  {
    title: 'Kembara Sally - Augmented Reality Mobile Application',
    slug: 'kembara-sally',
    bgImage:'/assets/ksbg.png',
    desc: 'Kembara Sally is an interactive mobile AR story application for early childhood education, based on Dewan Bahasa dan Pustaka’s Sally Si Salpa, featuring animated characters.',
    subdesc:
      'Implemented image target recognition for scene-triggered storytelling using Vuforia SDK.',
    href: '/projects/kembara-sally',
    logo: '/assets/SallyLogo.jpeg',
    logoStyle: {
      backgroundColor: 'rgba(107, 158, 153, 0.3)', // R,G,B,A（A = 透明度）
      border: '0.2px solid rgba(107, 158, 153, 0.5)',
      boxShadow: '0px 0px 60px 0px rgba(47, 103, 182, 0.3)',
      
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/Unity.png',
      },
      {
        id: 2,
        name: 'Figma',
        path: 'assets/figma.svg',
      },
      {
        id: 3,
        name: 'Blender',
        path: '/assets/Blender.png',
      },
      {
        id: 4,
        name: 'Vuforia',
        path: '/assets/vuforia.png',
      },
    ],
  },
  {
    title: 'Preschool Learn & Grow - 2D Mobile Application',
    slug: 'preschool-learn-grow',
    bgImage:'/assets/preschoolbg.png',
    desc: 'Preschool Learn & Grow is a 2D interactive learning application aimed at teaching English and Mathematics to children aged 4 to 6 years old.',
    subdesc:
      'Implemented user authentication and security features, requiring email registration and login to ensure safe access.',
    href: '/projects/preschool-learn-grow',
    logo: '/assets/PlgLogo.png',
    logoStyle: {
      backgroundColor: 'rgba(255, 249, 217, 0.3)',         // 半透明米黄色
      border: '0.2px solid rgba(255, 249, 217, 0.5)',       // 较明显的边框
      boxShadow: '0px 0px 60px 0px rgba(255, 249, 217, 0.4)', // 柔和光晕
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/Unity.png',
      },
      {
        id: 2,
        name: 'Figma',
        path: 'assets/figma.svg',
      },
      {
        id: 3,
        name: 'Blender',
        path: '/assets/Blender.png',
      },
    ],
  },
  {
    title: 'Bike Rent - Mobile Application',
    slug: 'bike-rent',
    bgImage:'/assets/bikerentbg.png',
    desc: ' Bike Rent is a mobile application for UTHM students to rent bicycles in UTHM campus. This rental application is developed using Android studio and Kotlin.',
    subdesc:
      'It utilizes Firebase for authentication and integrates Google Maps and Weather API in the application.',
    href: '/projects/bike-rent',
    logo: '/assets/Bikerent.png',
    logoStyle: {
      backgroundColor: 'rgba(216, 216, 216, 0.3)',           // 半透明灰色
      border: '0.2px solid rgba(216, 216, 216, 0.5)',         // 半透明边框
      boxShadow: '0px 0px 60px 0px rgba(216, 216, 216, 0.4)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'AndroidStudio',
        path: '/assets/AndroidStudioLogo.png',
      },
      {
        id: 2,
        name: 'Kotlin',
        path: 'assets/Kotlin.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
      
    ],
  },
  {
    title: '3D Model Creation',
    slug: '3D-Model',
    bgImage:'',
    desc: 'Explore a collection of my 3D creations, from characters and props to immersive environments.',
    subdesc:
      'This section showcases my skills in modeling, texturing, lighting, and rendering across various projects. It also contains all the animation that I have create in the Blender.',
    href: 'https://gohxiujunportfolio.my.canva.site/3d-model-portfolio',
    logo: '/assets/3dmodelpic.png',
    logoStyle: {
      backgroundColor: 'rgba(216, 216, 216, 0.3)',           // 半透明灰色
      border: '0.2px solid rgba(216, 216, 216, 0.5)',         // 半透明边框
      boxShadow: '0px 0px 60px 0px rgba(216, 216, 216, 0.4)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [      
      {
        id: 1,
        name: 'Blender',
        path: '/assets/Blender.png',
      },
      
    ],
  },
  {
    title: 'Recycling Adventures with Azzuan - 3D Animation Video',
    slug: 'animation-recycling-adventures',
    bgImage:'/assets/vrfest.png',
    desc: ' Recycling Adventures with Azzuan" which aims to educate and inspire children about the importance of recycling and proper waste management.',
    subdesc:
      'All characters and props featured in this educational video were designed and modeled from scratch to completion using Blender software.',
    href: 'https://youtu.be/_ubKf9TSYRI',
    logo: '/assets/RwAzzuan.png',
    logoStyle: {
      backgroundColor: 'rgba(216, 216, 216, 0.3)',           // 半透明灰色
      border: '0.2px solid rgba(216, 216, 216, 0.5)',         // 半透明边框
      boxShadow: '0px 0px 60px 0px rgba(216, 216, 216, 0.4)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/Unity.png',
      },
      {
        id: 2,
        name: 'Procreate',
        path: 'assets/Procreate.png',
      },
      {
        id: 3,
        name: 'Blender',
        path: '/assets/Blender.png',
      },
      {
        id: 4,
        name: 'Canva',
        path: '/assets/Canva.svg',
      },
      {
        id: 5,
        name: 'Capcut',
        path: '/assets/Capcut.png',
      },
      
    ],
  },
  {
    title: 'Pet Adopt - Website Development',
    slug: 'pet-adoption',
    bgImage:'/assets/Petwebbg.png',
    desc: ' A simple, user-friendly website designed to make the pet adoption process easier, faster, and more accessible.',
    subdesc:
      'A production‑style web application designed with Dreamweaver using HTML, JavaScript, and SQL. Secure user registration and authentication system on the website to protect user data.',
    href: '/projects/pet-adoption',
    logo: '/assets/petweb.png',
    logoStyle: {
      backgroundColor: 'rgba(216, 216, 216, 0.3)',           // 半透明灰色
      border: '0.2px solid rgba(216, 216, 216, 0.5)',         // 半透明边框
      boxShadow: '0px 0px 60px 0px rgba(216, 216, 216, 0.4)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'PHP',
        path: 'assets/php.png',
      },
      {
        id: 3,
        name: 'Java Script',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'SQL',
        path: '/assets/sql.png',
      },            
    ],
  },
  {
    title: 'Bookscape - Bookstore Website Development',
    slug: 'book-scape',
    bgImage:'/assets/bookwebbg.png',
    desc: ' A simple, user-friendly E-commerce Website Development utilizing the ASP.NET framework, with C# programming languages.',
    subdesc:
      'The project is structured into two primary portals: the Member Portal and the Admin Portal, each of which have distinct functions to meet the demands of users and administrators.',
    href: '/projects/book-scape',
    logo: '/assets/bookwebicon.png',
    logoStyle: {
      backgroundColor: 'rgba(216, 216, 216, 0.3)',           // 半透明灰色
      border: '0.2px solid rgba(216, 216, 216, 0.5)',         // 半透明边框
      boxShadow: '0px 0px 60px 0px rgba(216, 216, 216, 0.4)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Mssql',
        path: '/assets/mssql.png',
      },
      {
        id: 2,
        name: 'ASP.Net',
        path: 'assets/Aspnet.png',
      },
      {
        id: 3,
        name: 'Java Script',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'CSharp',
        path: '/assets/csharp.png',
      },            
    ],
  },
];

export const myModels = [
  
  { name: 'Model 1', url: '/models/animation.glb' },
  { name: 'Model 2', url: '/models/art3d.glb' },
  { name: 'Model 3', url: '/models/arttext.glb' },
  { name: 'Model 4', url: '/models/lioncurve_stand.glb' },
  
  
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
    name: 'CardBiz Solutions Sdn Bhd – Acquired by MYEG',
    pos: 'Application Developer',
    duration: 'August 2024 - January 2025',
    task: 'CardBiz Solutions Sdn Bhd – Acquired by MYEG',
    title: "POS System Application",
    description: [
      "Conducted deep exploration of the SUNMI Developer IDE and SDKs, including printer and infrared scanner APIs.",
      "Developed and enhanced a QR-based ordering system using Android Studio and SUNMI SDK/API with Java and Kotlin.",
      "Deployed the application to SUNMI App Store using the SUNMI Partner Platform.",
      "Presented the system’s features and business impact to stakeholders."
    ],
    title2: "\nBank e-Statement System",
    description2: [
      "Contributed to the development of the Bank e-Statement System, an electronic statement management platform for a bank.",
      "Built 4 modules using ASP.Net framework and C#, JavaScript, jQuery, and SQL language.",      
      "Developed a dynamic modal pop-up to display active notices in real-time using backend data.",
      "Developed filtering options and Excel export feature aligned with report columns.",
      "Implemented multi-criteria search filters and created complex SQL queries to retrieve and process data from multiple tables.",
      "Collaborated with QA team to resolve system bugs and updated issue statuses, and ensured feature deployment readiness."
    ],
    icon: '/assets/cbzlogo.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
    pos: 'Bachelor of Computer Science (Multimedia Computing)',
    duration: '2021 - 2025',
    title: "CGPA: 3.82 | Dean's List for 6 consecutive semesters.\n\n As a fresh graduate, I completed my degree in Computer Science (Multimedia Computing) at Universiti Tun Hussein Onn Malaysia (UTHM). My academic journey emphasized front-end development, multimedia systems, HCI, and UIUX design.\n\nIn addition to core development skills, I explored technologies such as Augmented Reality (AR), Virtual Reality (VR), and mobile game development, which further deepened my interest in building immersive and interactive digital experiences.",
    icon: '/assets/uthmlogo.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Kolej Tingkatan Enam Pontian (STPM)',
    pos: 'Form 6 Education',
    duration: '2019 - 2021',
    title: " CGPA: 2.75 | Muet: Band 4\n\nI pursued my Form 6 education at Kolej Tingkatan Enam Pontian, focusing on the Science Stream with a specialization in Physics. This foundation sharpened my analytical thinking and problem-solving skills, which later guided me toward my passion in computer science and software development.",
    icon: '/assets/stpm.svg',
    animation: 'salute',
  },
];
