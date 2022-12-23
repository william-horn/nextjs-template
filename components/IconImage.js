
import Image from "next/image";
import Container from "./Container";

import buildClassName from "../lib/helpers/buildClassName";

const IconImage = ({ className="", remove, src, size="48px" }) => {
  return (
    <Container
    className={buildClassName({
      base: "icon-container relative inline-block",
      extend: className,
      remove
    })}
    style={{width: size, height: size}}>
      <Image src={src} alt="icon" sizes={size} fill />
    </Container>
  );
};

export default IconImage;

