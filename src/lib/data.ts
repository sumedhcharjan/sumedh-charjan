export const projects = [
  {
    id: 0,
    title: "TrackVault",
    description:
      "A secure file-sharing platform with support for file uploads, user authentication, and public/private access control. Includes Redis-based analytics to track views and downloads with auto-destruction rules, and uses AWS S3 for scalable, private file storage. Deployed on AWS EC2 with scalability and reliability in mind.",
    image: "/trackvault.png",
    github: "#",
    live: "#",
    techStack: "Next.js, Supabase, Redis, AWS S3, Kinde, AWS EC2",
  },
  {
    id: 1,
    title: "CollabBoard",
    description:
      "A real-time collaborative whiteboard built with the MERN stack and Socket.IO for live synchronization. Uses Rough.js to render hand-drawn style sketches, includes integrated real-time chat, and persists board state in MongoDB for session recovery.",
    image: "/collabboard.png",
    github: "#",
    live: "#",
    techStack: "MongoDB, Express.js, React, Node.js, Socket.IO, Rough.js",
  },
  {
    id: 2,
    title: "Job Portal",
    description:
      "A job platform with dynamic filtering by location, salary, and role type, plus a responsive employer dashboard for posting jobs and viewing insights. Supports real-time candidate–employer communication with instant notifications and integrates Agora for video interview scheduling inside the platform.",
    image: "/job-portal.png",
    github: "#",
    live: "#",
    techStack: "MongoDB, Express.js, React, Node.js, JWT, Cloudinary, Agora",
  },
];

export const skills = [
  // Languages
  { name: "C", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Frameworks & Libraries
  { name: "React", category: "Frameworks & Libraries" },
  { name: "Next.js", category: "Frameworks & Libraries" },
  { name: "Node.js", category: "Frameworks & Libraries" },
  { name: "Express.js", category: "Frameworks & Libraries" },
  { name: "Tailwind CSS", category: "Frameworks & Libraries" },
  { name: "MongoDB", category: "Frameworks & Libraries" },

  // Technologies & Tools
  { name: "Linux", category: "Technologies & Tools" },
  { name: "Windows", category: "Technologies & Tools" },
  { name: "Git", category: "Technologies & Tools" },
  { name: "GitHub", category: "Technologies & Tools" },
  { name: "Cloudinary", category: "Technologies & Tools" },
  { name: "Agora SDK", category: "Technologies & Tools" },
  { name: "Rough.js", category: "Technologies & Tools" },
  { name: "Socket.IO", category: "Technologies & Tools" },
  { name: "AWS", category: "Technologies & Tools" },
  { name: "Supabase", category: "Technologies & Tools" },
  { name: "Redis", category: "Technologies & Tools" },
  { name: "KindeAuth", category: "Technologies & Tools" },
];

export const experiences = [
  {
    id: 1,
    title: "Developer Intern (MERN Stack)",
    company: "FinED (Incubated at Ramdeobaba University, Nagpur and VJTI, Mumbai)",
    period: "June 2025 – Present (Remote)",
    description:
      "Developing core pages for FinED’s financial education platform, including the Courses page and Course Path/Island UI. Building responsive, modular components with React and Tailwind CSS, and implementing Figma-based UI/UX with interactive elements and smooth transitions.",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Electronics and Telecommunication Engineering (Minor in AI & ML)",
    institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    period: "Aug 2023 – Aug 2027",
    description: "CGPA: 8.06",
  },
  {
    id: 2,
    degree: "Higher Secondary & Entrance",
    institution: "Prerna Junior College, Nagpur",
    period: "2023",
    description: "SSC: 94.5%, HSC: 83%, MHT-CET: 99.605 percentile",
  },
];

export const blogs = [];
