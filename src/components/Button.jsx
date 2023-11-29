import { useState } from "react";

const Button = ({ indicator, text, className, handleClick }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
    handleClick(indicator, !isActive);
  };

  return (
    <button
      className={isActive ? `${className} active` : className}
      onClick={toggleButton}
    >
      {text}
    </button>
  );
};

export default Button;