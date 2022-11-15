import { createContext, useEffect, useState } from "react";

let darkModeFlag: boolean = false;

export const DarkModeContext = createContext(darkModeFlag);

interface IDarKModeToggle {
  toggleAction: () => void;
  darkModeFlag: boolean;
}

export const DarkModeToggle = (props: IDarKModeToggle) => {
  const [darkModeFlag, setDarkModeFlag] = useState(false);

  props.toggleAction = () => {
    console.log("Mode has been toggled");
  };

  useEffect(() => {
    props.darkModeFlag = darkModeFlag;
  }, [darkModeFlag]);
};
