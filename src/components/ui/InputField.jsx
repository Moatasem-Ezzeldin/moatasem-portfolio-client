import { Link } from "react-router-dom" ;
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const InputField = ( { 
  label, name, type = "text", register, placeholder, authLink,
  error, password=false, autoComplete= "on", disabled=false, 
} ) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const labelColer = isFocused  ?  ( error ?"text-red-500" : "text-primary" ) : ( "text-title" );
  const field = register(name);
  const inputType = password ? (showPassword ? "text" : "password") : (type);
  return (
    <div className='flex flex-col gap-1.5 w-full'>
      {(label || authLink) &&
        <div className={`flex justify-between items-center`}>
          <label 
            className={`block min-h-5 w-fit cursor-pointer text-sm font-medium mb-1 ${labelColer}
            transition-colors duration-200`}
            htmlFor={name}>
              {label || ""}
          </label>
        {authLink &&
          <Link to={authLink?.to} className="text-xs font-medium text-end text-subtitle
          hover:text-title transition-colors duration-300 underline"
          >
            {authLink?.label}
          </Link>
        }
        </div>
      }
      <div className={`relative w-full rounded-md focus-within:ring-2 focus-within:ring-primary
        border bg-input border-input-border focus-within:border-primary transition overflow-hidden
        ${error && "focus-within:ring-red-500 focus-within:border-red-500"}`}>
        <input
        id={name}
        type={inputType}
        {...field }
        onFocus={() => { setIsFocused(true); }}
        onBlur={(e) => { setIsFocused(false); field.onBlur(e); }}
        onChange={(e) => { field.onChange(e); }}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-md outline-none disabled:opacity-40
          bg-input text-input-text text-base leading-6`}  
        />
        {password && 
          <button
            type="button"
            className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 cursor-pointer 
            text-subtitle hover:text-title transition-colors duration-200"
            onClick={() => {setShowPassword(!showPassword)}}
          >
            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
          </button>
        }
      </div>
      <span className='text-red-500 min-h-[15.99px] text-xs'>{error?.message}</span>
    </div>
  )
}

export default InputField