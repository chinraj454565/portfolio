export const personalInfo = {
  name: "Chinraj P",
  title: "Full Stack Developer",
  description:
    "I build scalable backend APIs and modern web applications using Python and TypeScript ecosystems. I enjoy designing robust systems, REST APIs, and full-stack platforms.",
  email: "jarchin8@gmail.com",
  phone: "+91-7448445519",
  location: "Edappady, Salem, TN",
  github: "https://github.com/chinraj-creater",
  linkedin: "https://linkedin.com/in/chinraj-creater",
  image: "/images/profile.jpg",
};

export const skills = {
  backend: [
    "Python",
    "Django",
    "Flask",
    "Django REST Framework",
    "Node.js",
    "Express.js",
    "NestJS",
    "REST API Development",
  ],
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  database: ["PostgreSQL", "MySQL", "SQLite", "Prisma ORM"],
  tools: ["Git", "GitHub", "Docker", "Linux", "VS Code", "REST API Design"],
};

export const projects = [
  {
    id: 1,
    title: "Full-Stack E-commerce Platform",
    description:
      "A modern full-stack e-commerce platform supporting product browsing, cart management, order processing, and return management with a complete REST API architecture.",
    longDescription:
      "Built with Next.js on the frontend and Node.js backend, this platform handles the full e-commerce lifecycle — from product catalog browsing to cart management, order processing, and return request workflows with admin order management.",
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "TypeScript"],
    github: "https://github.com/chinraj-creater",
    live: "#",
    featured: true,
    image: "/images/ecommerce.jpg",
  },
  {
    id: 2,
    title: "Django Blog Website",
    description:
      "A full-stack blogging platform with user authentication, blog post management, comment system, and admin dashboard.",
    longDescription:
      "A complete blogging platform where users can create, edit, and manage blog posts. Features include authentication, commenting, and a full admin dashboard for content management.",
    tech: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
    github: "https://github.com/chinraj-creater",
    live: "#",
    featured: false,
    image: "/images/blog.jpg",
  },
  {
    id: 3,
    title: "Movie Database REST API",
    description:
      "A RESTful API built using Django REST Framework to manage movie records with CRUD operations, filtering, and pagination.",
    longDescription:
      "A well-structured REST API for managing movie records. Supports full CRUD operations, advanced filtering and search, and pagination for efficient data retrieval.",
    tech: ["Python", "Django REST Framework", "PostgreSQL"],
    github: "https://github.com/chinraj-creater",
    live: "#",
    featured: false,
    image: "/images/movie-api.jpg",
  },
  {
    id: 4,
    title: "NestJS REST API",
    description:
      "A modular backend API built with NestJS and TypeScript following clean architecture with controllers, services, and DTO validation.",
    longDescription:
      "A production-ready backend API following clean architecture principles. Implements modular design with controllers and service layers, complete DTO validation, and well-structured REST endpoints.",
    tech: ["NestJS", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/chinraj-creater",
    live: "#",
    featured: false,
    image: "/images/nestjs-api.jpg",
  },
  {
    id: 5,
    title: "Web Dice Game",
    description:
      "A browser-based two-player dice game with custom rules, animations, and sound effects built with vanilla JavaScript.",
    longDescription:
      "A fun, interactive two-player dice game playable in the browser. Features custom game rules, smooth animations, and interactive UI elements.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chinraj-creater",
    live: "#",
    featured: false,
    image: "/images/dice-game.jpg",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    period: "2023 — Present",
    points: [
      "Developed REST APIs using Django REST Framework and NestJS",
      "Built a full-stack e-commerce platform using Next.js, Node.js, Prisma, and PostgreSQL",
      "Created full-stack web applications using Django",
      "Designed scalable backend systems and API architectures",
      "Implemented authentication systems, cart workflows, and order management",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Govt Arts and Science College, Komarapalayam",
    period: "Aug 2022 – May 2025",
    grade: "CGPA: 7.7 — First Class with Distinction",
  },
  {
    degree: "D.Pharm — 70.6%",
    institution: "SS Institute of Pharmacy, Sangagiri",
    period: "Aug 2019 – Feb 2022",
    grade: "",
  },
  {
    degree: "HSC — 70.5% | SSLC — 89%",
    institution: "Govt Boys Higher Secondary School, Edappady",
    period: "Jun 2016 – Apr 2019",
    grade: "",
  },
];
