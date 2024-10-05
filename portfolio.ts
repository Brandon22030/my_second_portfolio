import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Brandon medehou",
  title: "Hi all, I'm Brandon",
  description:
    "As a fullstack developer with a passion for creating seamless, dynamic web applications, I thrive on solving complex problems and delivering efficient, user-friendly solutions. My expertise spans across both frontend and backend technologies, allowing me to build everything from visually stunning interfaces to robust, scalable architectures. With experience in modern frameworks like React, Vue.js, and Next.js on the frontend, combined with strong backend skills in Node.js, Express, NestJS, and Laravel, I am proficient in crafting full-fledged applications.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "Brandon22030",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:daniel.medehou@epitech.eu",
  linkedin: "www.linkedin.com/in/brandon-medehou",
  github: "https://github.com/Brandon22030",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive, interactive web and mobile applications using JavaScript/TypeScript, with expertise in frameworks like React, Vue.js, and Next.js, and a strong focus on clean design with HTML5, CSS3, and Tailwind CSS"
        ),
        emoji(
          "⚡ Experienced in developing scalable server-side solutions with Node.js, Express.js, NestJS, Laravel, and Flask, creating RESTful APIs, microservices, and secure backend systems"
        ),
        emoji(
          "⚡ Proficient in designing and managing databases with MongoDB, MySQL, PostgreSQL, and SQLite, using ORMs like Mongoose and TypeORM for efficient data handling"
        ),
        emoji(
          "⚡ Skilled in using Git for version control, Docker for containerization, and setting up CI/CD pipelines to streamline development and deployment processes"
        ),
        emoji(
          "⚡ Strong knowledge in implementing secure authentication, writing unit and integration tests, and managing projects within Agile environments for efficient and collaborative development"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Vuejs",
          iconifyTag: "devicon:vuejs",
        },
        {
          skillName: "Laravel",
          iconifyTag: "devicon:laravel",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "mongodb",
          iconifyTag: "devicon:mongodb",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "mysql",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "flask",
          iconifyTag: "logos:flask",
        },
        {
          skillName: "tailwindcss",
          iconifyTag: "devicon:tailwindcss",
        },
        {
          skillName: "nodeJs",
          iconifyTag: "logos:nodejs",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Django Developer",
    company: "Meganos Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2022 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "ZRTechnologies",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2022 - Jun 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Backend Developer",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Trello WordPress",
    desc: "A project to add and display tasks with vuejs and functionality with pinia and fetch that retrieves data from the wordpress REST API.",
    github: "https://github.com/Brandon22030/Trello-WordPress",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Post It",
    desc: "Post It project build with vuejs",
    github: "https://github.com/Brandon22030/post-it",
  },
  {
    name: "YOWL",
    desc: "This project involves the creation of an application enabling everyone to give their opinion on internet posts. Project build with Vuejs and Laravel",
    github: "https://github.com/Brandon22030/yowl",
  },
  {
    name: "My Show time",
    desc: "Ticket reservation website build with Nestjs and Mongodb",
    github: "https://github.com/Brandon22030/myShowTime",
  },
  {
    name: "My Dashboard",
    desc: "Microservices website build with nestjs and reactjs",
    github: "https://github.com/Brandon22030/myDashboard",
  },
  {
    name: "My Show time",
    desc: "Ticket reservation website build with Nestjs and Mongodb",
    github: "https://github.com/Brandon22030/myShowTime",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Brandon Medehou",
  description: greetings.description,
  author: "Brandon Medehou",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Brandon Medehou",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Brandon Medehou Portfolio",
  ],
};
