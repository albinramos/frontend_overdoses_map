import { useState } from 'react'

const Button = ({ name, className, handleClick }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleButton = () => {
    setIsActive(!isActive);
    handleClick(name, !isActive);
  };

  return (
    <button
      className={isActive ? `${className} active` : className}
      onClick={toggleButton}
    >
      {name.split(' (')[0]}
    </button>
  );
};

export default Button