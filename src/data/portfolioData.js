import mapsImg from '../assets/projects/maps.webp';
import brainlitixImg from '../assets/projects/brainlitix.webp';
import farmacyImg from '../assets/projects/Farmacy.webp';
import extensionImg from '../assets/projects/extenstion.webp';
import rtosImg from '../assets/projects/rtos.webp';
import lpuLogo from '../assets/lpulogo.png';
import seiLogo from '../assets/sei.png';
import oscgImg from '../assets/oscg_campus_lead.webp';
import hacktoberfestImg from '../assets/super_contributor.webp';
import competitiveProgrammingImg from '../assets/competitive_programming.png';
import badge01 from '../assets/badges/badge_01.webp';
import badge02 from '../assets/badges/badge_02.webp';
import badge03 from '../assets/badges/badge_03.webp';
import badge04 from '../assets/badges/badge_04.webp';
import badge05 from '../assets/badges/badge_05.webp';
import badge06 from '../assets/badges/badge_06.webp';
import badge07 from '../assets/badges/badge_07.webp';
import badge08 from '../assets/badges/badge_08.webp';
import badge09 from '../assets/badges/badge_09.webp';
import badge10 from '../assets/badges/badge_10.webp';
import badge11 from '../assets/badges/badge_11.webp';
import badge12 from '../assets/badges/badge_12.webp';
import badge13 from '../assets/badges/badge_13.webp';
import badge14 from '../assets/badges/badge_14.webp';
import superContributorBadge from '../assets/super_contributor.webp';
export const projects = [
   {
    id: 1,
    year: "2025",
    category: "MERN Stack",
    title: "Brainlitix",
    description: "Full-stack course-selling platform with JWT authentication, Razorpay payments, course management dashboards, and personalized learning progress tracking.",
    liveUrl: null,
    githubUrl: "https://github.com/harshmishra00/Course-selling-website",
    image: brainlitixImg,
    imageColor: "bg-purple-900",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Razorpay"]
  },{
    id: 2,
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
    image: rtosImg,
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
    description: "Leading the campus chapter to foster open-source contributions and development.",
    image: oscgImg,
    link: "https://oscg.dev"
  },
  {
    id: 2,
    year: "2025",
    title: "Hacktoberfest Super Contributor",
    organization: "Open Source",
    description: "Contributed to multiple open-source repositories with accepted pull requests.",
    image: hacktoberfestImg,
    link: "https://www.holopin.io/@harshmishra00#"
  },
  {
    id: 3,
    year: "2024",
    title: "Competitive Programming",
    organization: "LeetCode & GFG",
    description: "Solved 400+ algorithmic problems across various coding platforms.",
    image: competitiveProgrammingImg
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
    grade: "CGPA: ",
    logo: lpuLogo
  },
  {
    year: "2022 - 2023",
    title: "Singhania Educational Institute",
    subtitle: "Intermediate (Class XII)",
    grade: "Percentage: 91.2%",
    logo: seiLogo
  },
  {
    year: "2020 - 2021",
    title: "Singhania Educational Institute",
    subtitle: "Matriculation (Class X)",
    grade: "Percentage: 88.9%",
    logo: seiLogo
  }
];

export const certificates = [
  {
    id: 1,
    title: "Certificate 1",
    issuer: "Issuer Name",
    // import image at top: import cert1 from '../assets/cert1.jpg';
    // then set image: cert1,
    image: null, 
  },
  {
    id: 2,
    title: "Certificate 2",
    issuer: "Issuer Name",
    image: null,
  },
  {
    id: 3,
    title: "Certificate 3",
    issuer: "Issuer Name",
    image: null,
  }
];

export const badges = [
  {
    id: 0,
    platform: "HOLOPIN",
    title: "Super Contributor",
    image: superContributorBadge,
    link: "https://www.holopin.io/@harshmishra00#",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/20"
  },
  {
    id: 1,
    platform: "HACKERRANK",
    title: "Problem Solving",
    image: badge06,
    link: "https://www.hackerrank.com/profile/harshschoollife",
    borderColor: "border-green-500/20",
    glowColor: "shadow-green-500/20"
  },
  {
    id: 2,
    platform: "HOLOPIN",
    title: "Holopin Board",
    image: badge07,
    link: "https://holopin.io/@harshmishra00#",
    borderColor: "border-blue-500/20",
    glowColor: "shadow-blue-500/20"
  },
  {
    id: 3,
    platform: "LEETCODE",
    title: "LeetCode Milestone",
    image: badge01,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-purple-500/20",
    glowColor: "shadow-purple-500/20"
  },
  {
    id: 4,
    platform: "LEETCODE",
    title: "LeetCode Milestone",
    image: badge02,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-blue-500/20",
    glowColor: "shadow-blue-500/20"
  },
  {
    id: 5,
    platform: "LEETCODE",
    title: "LeetCode Milestone",
    image: badge03,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-green-500/20",
    glowColor: "shadow-green-500/20"
  },
  {
    id: 6,
    platform: "LEETCODE",
    title: "LeetCode Milestone",
    image: badge04,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-red-500/20",
    glowColor: "shadow-red-500/20"
  },
  {
    id: 7,
    platform: "LEETCODE",
    title: "LeetCode Milestone",
    image: badge05,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-red-500/20",
    glowColor: "shadow-red-500/20"
  },
  {
    id: 8,
    platform: "LEETCODE",
    title: "LeetCode Challenge",
    image: badge08,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-amber-500/20",
    glowColor: "shadow-amber-500/20"
  },
  {
    id: 9,
    platform: "LEETCODE",
    title: "LeetCode Challenge",
    image: badge09,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-blue-500/20",
    glowColor: "shadow-blue-500/20"
  },
  {
    id: 10,
    platform: "LEETCODE",
    title: "LeetCode Challenge",
    image: badge10,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-purple-500/20",
    glowColor: "shadow-purple-500/20"
  },
  {
    id: 11,
    platform: "LEETCODE",
    title: "LeetCode Challenge",
    image: badge11,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-green-500/20",
    glowColor: "shadow-green-500/20"
  },
  {
    id: 12,
    platform: "LEETCODE",
    title: "LeetCode Challenge",
    image: badge12,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-rose-500/20",
    glowColor: "shadow-rose-500/20"
  },
  {
    id: 13,
    platform: "LEETCODE",
    title: "LeetCode Challenge",
    image: badge13,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-sky-500/20",
    glowColor: "shadow-sky-500/20"
  },
  {
    id: 14,
    platform: "LEETCODE",
    title: "LeetCode Challenge",
    image: badge14,
    link: "https://leetcode.com/u/harshmishra00/",
    borderColor: "border-indigo-500/20",
    glowColor: "shadow-indigo-500/20"
  }
];
