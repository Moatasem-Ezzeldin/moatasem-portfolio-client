import {useLanguage} from "../../hooks/useLanguage"
import { Hero, About, Skills, Projects, Contact } from "../../components/sections/index";
import { heroData, aboutData, skillsData, projectsData, contactData } from "../../data/index";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Landing = () => {
  const { language, isEnglish } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  if (location.state?.scrollTo === "projects") {
    setTimeout(() => {
      scroller.scrollTo("projects", {
        smooth: true,
        duration: 700,
        offset: -70,
      });

      navigate("/", { replace: true, state: {} });
    }, 100);
  }
}, [location.state, navigate]);
  return (
    <>
      <Hero heroData={heroData[language]} name="hero" isEnglish={isEnglish} />
      <About aboutData={aboutData[language]} name="about" />
      <Skills skillsData={skillsData[language]} name="skills" />
      <Projects projectsData={projectsData[language]} name="projects" language={language} />
      <Contact contactData={contactData[language]} name="contact" language={language} />
    </>
  )
}

export default Landing