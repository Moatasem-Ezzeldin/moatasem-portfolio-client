import { Container } from "../../components/index"; 

const Footer = ({ isEnglish }) => { 
  const year = new Date().getFullYear(); 
  return ( 
  <footer className="w-full bg-surface border-t border-border"> 
    <Container className="h-16"> 
      <div className="flex items-center justify-center h-full text-xs sm:text-sm text-subtitle">
          © {year}{" "} {isEnglish ? "All rights reserved • Built by" : "جميع الحقوق محفوظة • صُنع بواسطة"} 
          <span className="text-logo font-medium cursor-pointer ltr:ml-1 rtl:mr-1"> 
            {isEnglish ? "Moatasem" : "معتصم"} 
          </span> 
        </div> 
    </Container> 
  </footer> 
  ); 
}; 

export default Footer;