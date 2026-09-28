import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Logo = ({ logoData, auth = false, className="" }) => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;

    if (newCount === 4) {
      navigate("/auth/login");
      setClickCount(0);
      return;
    }

    setClickCount(newCount);
  };
  return (
    <div 
      onClick={handleLogoClick}
      className={`flex items-center cursor-pointer ${auth ? "flex-col gap-0.5" : ""} ${className}`}
    >
      <img 
        className={`${auth ? "h-9 w-9" : "h-7 w-7"}`} 
        src={logoData.logo} 
        alt="Logo" 
      />
      <div 
        className={` ${auth ? "text-center" : "hidden md:block"}`}
      >
        <h1 className={`font-semibold text-logo ${auth ? "text-lg" : "hidden"}`}>
          {logoData.name}
        </h1>
        {auth &&
          <p className="text-xs text-primary/60">
            {logoData.authText}
          </p>
        }
      </div>
    </div>
  )
}

export default Logo;