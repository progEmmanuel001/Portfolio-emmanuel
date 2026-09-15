export const FILTERS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "pictoblox", label: "Pictoblox" },
  { id: "robotics", label: "Robotics" },
];

export const PROJECTS = [
  {
    id: "gracemade",
    category: "web",
    tag: "Web",
    title: "Fashion Website",
    image: "/images/gracemade.png",
    description: "A website for the Grace Made It brand with real-time insights.",
    stack: [{ label: "React", icon: "fa-brands fa-react" }],
    live: "https://grace-made-it-zeta.vercel.app/",
  },
  {
    id: "starcity",
    category: "web",
    tag: "Web",
    title: "Starcity RP",
    image: "/images/starcity.png",
    description: "A responsive roleplay game website and webshop.",
    stack: [
      { label: "React", icon: "fa-brands fa-react" },
      { label: "Firebase", icon: "fa-solid fa-fire" },
      { label: "Collaboration", icon: "fa-solid fa-users" },
    ],
    live: "https://starcity-rp-coral.vercel.app/",
  },
  {
    id: "airflex",
    category: "web",
    tag: "Web",
    title: "AirFlex Runner Website",
    image: "/images/sneak.png",
    description:
      "A responsive website for a sneaker brand, showcasing their products and providing an online shopping experience.",
    stack: [{ label: "React", icon: "fa-brands fa-react" }],
    live: "https://kicks-hub-drab.vercel.app/",
  },
  {
    id: "drift",
    category: "web",
    tag: "Web",
    title: "Automotive Showcase Website",
    image: "/images/drift.png",
    description:
      "A modern, high-performance automotive website built in React, with a premium experience inspired by performance car culture.",
    stack: [{ label: "React", icon: "fa-brands fa-react" }],
    live: "https://mpr-drift.vercel.app/",
  },
  {
    id: "confidence",
    category: "pictoblox",
    tag: "Pictoblox",
    title: "Face Confidence Detector",
    image: "/images/confidence.png",
    description:
      "An AI application built with Pictoblox that reads human confidence from facial expression.",
    stack: [
      { label: "AI", icon: "fa-solid fa-robot" },
      { label: "Pictoblox" },
    ],
    live: "https://pictoblox.page.link/mtjbsJW8oZpnupGPA",
  },
  {
    id: "capstone",
    category: "pictoblox",
    tag: "Pictoblox",
    title: "Gender, Emotion & Pose Detector",
    image: "/images/capstone.png",
    description:
      "An AI application built with Pictoblox that detects human gender, emotion and pose.",
    stack: [
      { label: "AI Extensions", icon: "fa-solid fa-robot" },
      { label: "Pictoblox" },
    ],
    live: "https://pictoblox.page.link/puVKzFZQuMAHBcnG6",
  },
  {
    id: "rps",
    category: "pictoblox",
    tag: "Pictoblox",
    title: "Rock, Paper & Scissors",
    image: "/images/rps.png",
    description: "A machine learning game built with Pictoblox.",
    stack: [
      { label: "Machine Learning" },
      { label: "Pictoblox", icon: "fa-solid fa-robot" },
    ],
    live: "https://pictoblox.page.link/puVKzFZQuMAHBcnG6",
  },
  {
    id: "smart-gate",
    category: "robotics",
    tag: "Robotics",
    title: "Smart Barrier Gate",
    image: "/images/smart-gate.jpg",
    description:
      "An autonomous robotic gate that detects vehicles and opens on its own using sensors.",
    stack: [
      { label: "Fun Motion" },
      { label: "Robotics", icon: "fa-solid fa-robot" },
      { label: "Sensors" },
    ],
  },
  {
    id: "color-sorter",
    category: "robotics",
    tag: "Robotics",
    title: "Color Sorter",
    image: "/images/color.jpg",
    description:
      "An autonomous robot that sorts by colour and picks up objects using sensors.",
    stack: [
      { label: "Lego EV3", icon: "fa-solid fa-gears" },
      { label: "Robotics", icon: "fa-solid fa-robot" },
      { label: "Sensors" },
    ],
  },
];
