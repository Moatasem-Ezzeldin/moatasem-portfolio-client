import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { Button } from "../../components/index";

const ThemeToggle = ({ className }) => {
    const { isLight, toggleTheme } = useTheme();
    return (
        <div className="hidden md:block w-8 h-8 rounded-full overflow-hidden">
            <Button
                variant="secondary"
                onClick={toggleTheme} 
                className={`w-full h-full ${className}`}
                >
                {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
        </div>
    )
}

export default ThemeToggle