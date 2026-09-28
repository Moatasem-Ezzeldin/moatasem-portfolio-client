import {useLanguage} from "../../hooks/useLanguage"
import { Hero, About } from "../../components/sections/index";
import { heroData, aboutData } from "../../data/index";

const Landing = () => {
  const { language, isEnglish } = useLanguage();
  return (
    <>
      <Hero heroData={heroData[language]} name="hero" isEnglish={isEnglish} />
      <About aboutData={aboutData[language]} name="about" isEnglish={isEnglish} />
    </>
  )
}

export default Landing