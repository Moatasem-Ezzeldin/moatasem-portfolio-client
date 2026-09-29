import {
  Monitor,
  Server,
  Code2,
  Wrench,
  Users,
  Languages,
} from "lucide-react";

const skillsData = {
    en: {
        title: "My Skills",
        m: [
            {
                title: "Frontend Development",
                icon:Monitor,
                skills: [
                    "HTML", "CSS","Sass", "Bootstrap", "JavaScript", "React", "React Router",
                    "Context API","React Lifecycle / Effects","Props & State", "Redux",
                    "Redux Toolkit", "RTK Query", "Tailwind CSS", "React Hook Form", "Yup", "Motion",
                    "Custom Hooks", "Custom Components"
                ],
            },
            {
                title: "Backend Development",
                icon: Server,
                skills: [
                    "Node.js", "Express.js","Mongoose", "MongoDB", "SQL", "REST API", "JWT", "Authentication & Authorization",
                    "Multer","Error Handling","Validation", "CORS", "Express Middleware",
                    "Helmet", "HPP", "Morgan", "Cookie Parser", "Bcrypt", "API Security",
                ],
            },
            {
                title: "Programming Fundamentals",
                icon: Code2,
                skills: [
                    "Java", "C++", "Object-Oriented Programming", "Data Structures", "Algorithms", "Problem Solving",
                ],
            },
            {
                title: "Tools & Platforms",
                icon: Wrench,
                skills: [
                    "Git", "GitHub", "GitHub Pages", "VS Code", "Postman","npm", "Vite",
                    "Firebase", "Cloudinary", "Netlify", "Render", 
                ],
            },
            {
                title: "Soft Skills",
                icon: Users,
                skills: [
                     "Problem Solving", "Fast Learning", "Adaptability", "Teamwork", "Communication", "Attention to Detail", 
                ],
            },
            {
                icon: Languages,
                title: "Languages",
                skills: [
                     "Arabic — Native", "English — Very Good", "French — Intermediate", 
                ],
            },
        ],
    },
    ar: {
        title: "مهاراتي",
        m: [
            {
                title: "تطوير الواجهات الأمامية",
                icon:Monitor,
                skills: [
                    "HTML", "CSS","Sass", "Bootstrap", "JavaScript", "React", "React Router",
                    "Context API","React Lifecycle / Effects","Props & State", "Redux",
                    "Redux Toolkit", "RTK Query", "Tailwind CSS", "React Hook Form", "Yup", "Motion",
                    "Custom Hooks", "Custom Components"
                ],
            },
            {
                title: "تطوير الواجهات الخلفية",
                icon: Server,
                skills: [
                    "Node.js", "Express.js","Mongoose", "MongoDB", "SQL", "REST API", "JWT", "Authentication & Authorization",
                    "Multer","Error Handling","Validation", "CORS", "Express Middleware",
                    "Helmet", "HPP", "Morgan", "Cookie Parser", "Bcrypt", "API Security",
                ],
            },
            {
                title: "أساسيات البرمجة",
                icon: Code2,
                skills: [
                    "Java", "C++", "Object-Oriented Programming", "Data Structures", "Algorithms", "Problem Solving",
                ],
            },
            {
                title: "الأدوات والمنصات",
                icon: Wrench,
                skills: [
                    "Git", "GitHub", "GitHub Pages", "VS Code", "Postman","npm", "Vite",
                    "Firebase", "Cloudinary", "Netlify", "Render", 
                ],
            },
            {
                title: "المهارات الشخصية",
                icon: Users,
                skills: [
                     "Problem Solving", "Fast Learning", "Adaptability", "Teamwork", "Communication", "Attention to Detail", 
                ],
            },
            {
                title: "اللغات",
                icon: Languages,
                skills: [
                     "Arabic — Native", "English — Very Good", "French — Intermediate", 
                ],
            },
        ],
    },
};

export default skillsData;