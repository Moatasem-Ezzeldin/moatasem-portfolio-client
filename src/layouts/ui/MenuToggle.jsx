import { Menu } from "lucide-react";
import { Button } from "../../components/index";

const MenuToggle = ({ onClick, className }) => {
  return (
    <Button
        variant="secondary"
        onClick={onClick} 
        className={`w-8 h-8 rounded-full ${className}`}
        >
        <Menu size={16}/>
    </Button>
  )
}

export default MenuToggle