import { useReducer, useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/cartReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // const [cartData, setCartData] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
