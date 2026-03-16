import mapsImg from '../assets/projects/maps.png';
import brainlitixImg from '../assets/projects/brainlitix.jpeg';
import farmacyImg from '../assets/projects/Farmacy.png';
import extensionImg from '../assets/projects/extenstion.jpeg';

export const projects = [
  {
    id: 1,
    year: "2025",
    category: "Full Stack",
    title: "Maps",
    description: "Real-time maps app built with React and browser geolocation, integrating Google Maps and OpenWeather APIs for live location tracking and weather data.",
    liveUrl: "https://maps-5pny.onrender.com/",
    githubUrl: "https://github.com/harshmishra00/Maps",
    image: mapsImg,
    imageColor: "bg-blue-900",
    techStack: ["React", "Vite", "Google Maps API", "OpenWeather API", "CSS"]
  },
  {
    id: 2,
    year: "2025",
    category: "MERN Stack",
    title: "Brainlitix",
    description: "Full-stack course-selling platform with JWT authentication, Razorpay payments, course management dashboards, and personalized learning progress tracking.",
    liveUrl: null,
    githubUrl: "https://github.com/harshmishra00/Course-selling-website",
    image: brainlitixImg,
    imageColor: "bg-purple-900",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Razorpay"]
  },
  {
    id: 3,
    year: "2024",
    category: "Web App",
    title: "Farmer Companion",
    description: "Farmer wellness web platform with live weather conditions, irrigation guides, pest control advisories, and a marketplace for tools and equipment.",
    liveUrl: null,
    githubUrl: "https://github.com/harshmishra00/FarmerCompanion",
    image: farmacyImg,
    imageColor: "bg-green-900",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Weather API"]
  },
  {
    id: 4,
    year: "2024",
    category: "Systems / C",
    title: "RTOS Event Logger",
    description: "Real-Time Operating System implementation in C, featuring task scheduling, context switching, and synchronization primitives built from scratch.",
    liveUrl: null,
    githubUrl: "https://github.com/harshmishra00/RTOS",
    image: null,
    imageColor: "bg-orange-900",
    techStack: ["C", "FreeRTOS", "Task Scheduling", "Context Switching", "Semaphores"]
  },
  {
    id: 5,
    year: "2025",
    category: "Chrome Extension",
    title: "Text Cortex",
    description: "Chrome extension that saves copied text snippets, lets you edit, label, and reuse them — a smart clipboard manager built for developers and writers.",
    liveUrl: null,
    githubUrl: "https://github.com/harshmishra00",
    image: extensionImg,
    imageColor: "bg-rose-900",
    techStack: ["JavaScript", "Chrome APIs", "HTML", "CSS", "LocalStorage"]
  }
];

export const achievements = [
  {
    id: 1,
    year: "2026",
    title: "OSCG Campus Lead",
    organization: "OSCG",
    description: "Leading the campus chapter to foster open-source contributions and development."
  },
  {
    id: 2,
    year: "2025",
    title: "Hacktoberfest Super Contributor",
    organization: "Open Source",
    description: "Contributed to multiple open-source repositories with accepted pull requests."
  },
  {
    id: 3,
    year: "2024",
    title: "Competitive Programming",
    organization: "LeetCode & GFG",
    description: "Solved 400+ algorithmic problems across various coding platforms."
  }
];

export const skills = [
  {
    title: "Web Technologies",
    description: "React · Node.js · Express.js · REST APIs",
  },
  {
    title: "Languages",
    description: "C++ · Java · JavaScript",
  },
  {
    title: "Databases & Tools",
    description: "MongoDB · MySQL · Git · GitHub · Linux",
  },
  {
    title: "Core Concepts",
    description: "Data Structures & Algorithms · Object-Oriented Programming · DBMS",
  }
];

export const education = [
  {
    year: "2023 - Present",
    title: "Lovely Professional University",
    subtitle: "Bachelor of Technology - Computer Science and Engineering",
    grade: "CGPA: 7.66"
  },
  {
    year: "2022 - 2023",
    title: "Singhania Educational Institute",
    subtitle: "Intermediate (Class XII)",
    grade: "Percentage: 91.2%"
  },
  {
    year: "2020 - 2021",
    title: "Singhania Educational Institute",
    subtitle: "Matriculation (Class X)",
    grade: "Percentage: 88.9%"
  }
];
