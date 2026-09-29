import {useLanguage} from "../../hooks/useLanguage"
import { Hero, About, Skills } from "../../components/sections/index";
import { heroData, aboutData, skillsData } from "../../data/index";

const Landing = () => {
  const { language, isEnglish } = useLanguage();
  return (
    <>
      <Hero heroData={heroData[language]} name="hero" isEnglish={isEnglish} />
      <About aboutData={aboutData[language]} name="about" isEnglish={isEnglish} />
      <Skills skillsData={skillsData[language]} name="skills" isEnglish={isEnglish} />
    </>
  )
}

export default Landing