import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; 

const variants = {
    primary: "text-btn-primary-text bg-btn-primary-bg hover:bg-btn-primary-hover disabled:bg-btn-primary-disabled",
    secondary: "text-btn-secondary-text bg-btn-secondary-bg hover:bg-btn-secondary-hover disabled:bg-btn-secondary-disabled",
    destructive: "text-white bg-red-500 hover:bg-red-600 disabled:bg-red-200 disabled:text-red-400",
    edit: "text-white bg-amber-500 hover:bg-amber-600 disabled:bg-amber-200 disabled:opacity-50 disabled:text-amber-400",
};

const baseClasses = "inline-flex justify-center items-center gap-2 transition-colors duration-300 ease-in-out border border-border cursor-pointer select-none disabled:cursor-not-allowed disabled:pointer-events-none";

const Button = ({ children, variant= "primary", className = "", to, scrollTo, href, onClick, disabled = false, type = "button",  
}) => {
    const classes = `${baseClasses} ${variants[variant]} ${className}`;
    if(to) {
        return (
            <Link
                to={to}
                className={`${classes}`}
            >
                { children }
            </Link>
        )
    }
    if(scrollTo) {
        return (
            <ScrollLink
                to={scrollTo}
                smooth={true}
                duration={500}
                className={`${classes}`}
            >
                { children }
            </ScrollLink>
        )
    }
    if(href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className={`${classes}`}
            >
                { children }
            </a>
        )
    }
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${classes}`}
        >
            { children }
        </button>
    )
};

export default Button;