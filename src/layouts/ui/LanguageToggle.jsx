import { useLanguage } from "../../hooks/useLanguage";
import { Languages } from "lucide-react";
import { Button } from "../../components/index";

const LanguageToggle = ({ className }) => {
    const { toggleLanguage } = useLanguage();
    return (
        <div className="hidden md:block w-8 h-8 rounded-full overflow-hidden">
            <Button
                variant="secondary"
                onClick={toggleLanguage} 
                className={`w-full h-full ${className}`}
                >
                <Languages size={16}/>
            </Button>
        </div>
    )
}

export default LanguageToggle