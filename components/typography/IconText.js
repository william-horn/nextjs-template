

import Container from "../Container";

const IconText = ({ children }) => {
  return (
    <Container className="flex flex-wrap items-center">
      {children}
    </Container>
  );
};

export default IconText;