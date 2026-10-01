import { useState } from "react";
import { Container, SectionTitle, Button, ProjectCard } from "../../../../components/index"
const category = [
  {_id: 1, label: "All", value: "", },
  {_id: 2, label: "Frontend", value: "frontend", },
  {_id: 3, label: "Backend", value: "backend", },
  {_id: 4, label: "Full Stack", value: "full-stack", },
];
const projects = [
    {
        _id: "auth-flow-001",

        category: "full-stack",

        title: {
            en: "Auth Flow",
            ar: "نظام المصادقة"
        },

        description: {
            en: "A full-stack authentication system with secure authentication, session management, password reset, email verification, and OAuth integration.",
            ar: "نظام مصادقة متكامل يحتوي على تسجيل الدخول وإدارة الجلسات واستعادة كلمة المرور وتأكيد البريد الإلكتروني وتسجيل الدخول عبر OAuth."
        },

        tools: [
            "React",
            "Redux Toolkit",
            "RTK Query",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Tailwind CSS"
        ],

        features: {
            en: [
                "Secure authentication with access and refresh tokens",
                "Email verification and password reset",
                "Google and GitHub OAuth authentication",
                "Session management",
                "Protected routes and role-based authorization",
                "Admin users management"
            ],

            ar: [
                "نظام مصادقة آمن باستخدام Access و Refresh Tokens",
                "تأكيد البريد الإلكتروني واستعادة كلمة المرور",
                "تسجيل الدخول باستخدام Google و GitHub",
                "إدارة الجلسات",
                "حماية المسارات والصلاحيات حسب الدور",
                "إدارة المستخدمين من لوحة تحكم الأدمن"
            ]
        },

        image: "/images/projects/auth-flow.webp",

        liveUrl: "https://moatasem-auth-flow.netlify.app",

        frontendGithub: "https://github.com/Moatasem-Ezzeldin/auth-flow-client",

        backendGithub: "https://github.com/Moatasem-Ezzeldin/auth-flow-server"
    },

    {
        _id: "portfolio-001",

        category: "full-stack",

        title: {
            en: "Personal Portfolio",
            ar: "الموقع الشخصي"
        },

        description: {
            en: "A modern responsive portfolio website built to showcase my skills, projects, services, and professional profile.",
            ar: "موقع شخصي حديث ومتجاوب لعرض مهاراتي ومشاريعي وخدماتي وملفي المهني."
        },

        tools: [
            "React",
            "React Router",
            "Redux Toolkit",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Tailwind CSS"
        ],

        features: {
            en: [
                "Responsive design for all screen sizes",
                "Dark and light theme support",
                "Arabic and English language support",
                "RTL and LTR layout support",
                "Dynamic projects and testimonials",
                "Admin dashboard for content management"
            ],

            ar: [
                "تصميم متجاوب مع جميع أحجام الشاشات",
                "دعم الوضع الداكن والفاتح",
                "دعم اللغتين العربية والإنجليزية",
                "دعم اتجاهي RTL و LTR",
                "عرض المشاريع والتقييمات بشكل ديناميكي",
                "لوحة تحكم لإدارة محتوى الموقع"
            ]
        },

        image: "/images/projects/portfolio.webp",

        liveUrl: "https://moatasem-ezzeldin.github.io/portfolio/",

        frontendGithub: "https://github.com/Moatasem-Ezzeldin/moatasem-portfolio-client",

        backendGithub: "https://github.com/Moatasem-Ezzeldin/moatasem-portfolio-server"
    }
];
const Projects = ({ projectsData, name }) => {
  const [activeCategory, setActiveCategory] = useState("")
  return (
    <div name={name} className="bg-body border-t border-border py-10 min-h-screen">
    <Container className="w-full h-full">
      <SectionTitle title={projectsData.title} />
      {/* Search */}
      <input
          placeholder="Search by title or description"
          className="w-full max-w-md px-4 py-3 rounded-md outline-none border border-border
          bg-surface text-title placeholder:text-subtitle transition-all duration-100 ease-in-out
          focus:ring-2 focus:ring-primary"
      />
      {/* filter by Category */}
      <div className="w-full max-w-2xl flex flex-wrap gap-3 mt-8">
          {category.map((item) => (
              <Button
                  key={item._id}
                  variant={activeCategory === item.value ? "primary" : "secondary"}
                  onClick={() => setActiveCategory(item.value)}
                  className="px-2.5 py-1.25 rounded-full text-sm "
              >
                  {item.label}
              </Button>
          ))}
      </div>
      {/* Projects */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
      >
        {projects.map((item) => (
          <ProjectCard key={item._id} project={item} />
        ))}
      </div>
    </Container>
    </div>
  )
}

export default Projects;