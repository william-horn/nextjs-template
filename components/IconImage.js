
import Image from "next/image";
import Container from "./Container";

const IconImage = ({ src, size="48px" }) => {
  return (
    <Container style={{width: size, height: size}}>
      <Image src={src} alt="icon" sizes={size} fill />
    </Container>
  );
};

export default IconImage;

