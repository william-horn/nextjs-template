
import { createContext, useContext } from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children, value }) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )

}

export default AppProvider
