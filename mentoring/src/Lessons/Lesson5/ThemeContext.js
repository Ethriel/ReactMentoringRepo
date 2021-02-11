import React, {
  useRef,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";

export const ThemeContext = React.createContext(null);
export const useThemeContext = () => useContext(ThemeContext);

export const ControledThemeProvider = ({ children }) => {
  const colorRef = useRef(null);
  const [color, setColor] = useState("red");

  colorRef.current = color;

  const getColor = useCallback(() => {
    return colorRef.current;
  }, []);

  //   const value = useMemo(() => ({ color, getColor, setColor }), [
  //     color,
  //     getColor,
  //     setColor,
  //   ]);
  const value = { color, getColor, setColor };

  console.log("render provider");

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
