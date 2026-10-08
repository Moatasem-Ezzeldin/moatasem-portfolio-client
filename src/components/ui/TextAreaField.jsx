import { useState } from "react";

const TextAreaField = ({
  label,
  name,
  register,
  placeholder,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const labelColor = isFocused
    ? error
      ? "text-red-500"
      : "text-primary"
    : "text-title";

  const field = register(name);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          className={`block min-h-5 w-fit cursor-pointer text-sm font-medium mb-1
          ${labelColor} transition-colors duration-200`}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <div
        className={`relative w-full rounded-md
        focus-within:ring-2 focus-within:ring-primary
        border border-input-border focus-within:border-primary
        transition bg-input
        ${error && "focus-within:ring-red-500 focus-within:border-red-500"}`}
      >
        <textarea
          id={name}
          {...field}
          rows={4}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            field.onBlur(e);
          }}
          onChange={(e) => {
            field.onChange(e);
          }}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-md outline-none resize-none
          bg-input text-input-text text-base
          leading-6 min-h-26 overflow-y-auto"
        />
      </div>

      <span className="text-red-500 min-h-[15.99px] text-xs">
        {error?.message}
      </span>
    </div>
  );
};

export default TextAreaField;