import {useLanguage} from "../../hooks/useLanguage"
import { Hero, About, Skills, Projects } from "../../components/sections/index";
import { heroData, aboutData, skillsData, projectsData } from "../../data/index";

const Landing = () => {
  const { language, isEnglish } = useLanguage();
  return (
    <>
      <Hero heroData={heroData[language]} name="hero" isEnglish={isEnglish} />
      <About aboutData={aboutData[language]} name="about" />
      <Skills skillsData={skillsData[language]} name="skills" />
      <Projects projectsData={projectsData[language]} name="projects" isEnglish={isEnglish} />
    </>
  )
}

export default Landing