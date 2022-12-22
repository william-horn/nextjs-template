import ExampleLayout from "./ExampleLayout";

import Container from "../Container";
import { useAppContext } from "../../providers/AppProvider";

const LayoutController = ({ children }) => {
  const { currentPage } = useAppContext();
  
  const layoutName = currentPage.layout 
    ? (typeof currentPage.layout === 'string' && currentPage.layout || currentPage.layout.name) 
    : null;

  const getRenderedLayout = () => {
    switch (layoutName) {
      case 'ExampleLayout':
        return (
          <ExampleLayout>
            {children}
          </ExampleLayout>
        )
      default:
        return children;
    }
  }

  return (
    <Container className="layout-controller">
      {getRenderedLayout()}
    </Container>
  );
};

export default LayoutController;

