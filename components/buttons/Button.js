
import IconImage from "../IconImage";
import Container from "../Container";
import Link from "next/link";

import buildClassName from "../../lib/helpers/buildClassName";

const Button = ({ 
  className,
  remove,
  children, 
  onClick, 
  rightIcon, 
  leftIcon,
  leftIconSize="24px",
  rightIconSize="24px",
  url,
}) => {

  const renderIcon = (src, size) => {
    return (
      src
        ? <IconImage className="filter invert" size={size} src={src}/>
        : <></>
    )
  }

  const renderButton = () => {
    return (
      <button
      className={buildClassName({
        base: "relative flex items-center px-2 mx-2 my-2 text-white transition-all rounded filter hover:invert custom-button min-w-fit",
        extend: className,
        remove
      })}
      onClick={onClick}>
        {renderIcon(leftIcon, leftIconSize)}

        <span 
        className="flex-auto p-2 text-left text-white rounded text-md">
          {children}
        </span>
        
        {renderIcon(rightIcon, rightIconSize)}
      </button>
    );
  }

  return (
    url 
      ? <Link href={url}>
          {renderButton()}
        </Link>
      : renderButton()
    );
};

export default Button;

