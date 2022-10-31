import { Context, createContext, useContext } from "react";

import { DataParameters } from "./Components/Header";

export const HeaderContext: Context<DataParameters> = createContext({ pars: ["Default value"] });
