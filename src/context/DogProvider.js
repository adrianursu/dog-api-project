import { createContext, useContext, useMemo, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "FAVORITES": {
      return { ...state, favorites: action.value };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const initialState = {
    favorites: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);

  return <DogContext.Provider value={value}>{children}</DogContext.Provider>;
};

export const useFavorites = () => {
  const context = useContext(DogContext);

  if (!context) {
    throw new Error("useFavorites should be used inside te DogProvider");
  }

  return context;
};

export default DogProvider;
