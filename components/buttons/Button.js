
import IconImage from "../IconImage";
import Container from "../Container";
import Link from "next/link";

const Button = ({ 
  children, 
  onClick, 
  rightIcon, 
  leftIcon,
  url,
}) => {

  const renderIcon = (src) => {
    return (
      src
        ? <IconImage src={src}/>
        : <></>
    )
  }

  const renderButton = () => {
    return (
      <Container onClick={onClick}>
        {renderIcon(leftIcon)}
        <p>{children}</p>
        {renderIcon(rightIcon)}
      </Container>
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

