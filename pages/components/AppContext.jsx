import { useCallback, useState, createContext } from "react";

const initialState = {
  entries: [
    {
      Name: "ADY",
      Zip: 92300,
      Age: 21,
      Country: "France",
    },
  ],
};

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [information, setInformation] = useState(initialState);
  const addEntry = useCallback(({ data }) => {
    setInformation((currentState) => ({
      ...currentState,
      entries: [...currentState.entries, data],
    }));
  }, []);
  return (
    <AppContext.Provider
      {...props}
      value={{ entries: information.entries, addEntry }}
    />
  );
};

export default AppContext;
