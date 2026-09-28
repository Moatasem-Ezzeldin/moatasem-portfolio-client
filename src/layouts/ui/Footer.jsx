import { Container } from "../../components/index"; 

const Footer = ({ footerData }) => { 
  const year = new Date().getFullYear(); 
  return ( 
  <footer className="w-full bg-surface border-t border-border"> 
    <Container className="h-16"> 
      <div className="flex items-center justify-center h-full text-xs sm:text-sm text-subtitle">
          © {year}{" "} {footerData.allRights} 
          <span className="text-logo font-medium cursor-pointer ltr:ml-1 rtl:mr-1"> 
            {footerData.name} 
          </span> 
        </div> 
    </Container> 
  </footer> 
  ); 
}; 

export default Footer;