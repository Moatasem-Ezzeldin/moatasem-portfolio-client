import { Header, Footer, MainOutlet } from "./ui/index";
import { useLanguage } from "../hooks/useLanguage";

const MainLayout = () => {
  const { language, isEnglish } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-container">
      <Header language={language} isEnglish={isEnglish} />
      <MainOutlet className={"flex-1"}/>
      <Footer isEnglish={isEnglish} />
    </div>
  )
}

export default MainLayout