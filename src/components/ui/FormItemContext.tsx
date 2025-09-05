import * as React from "react";
import { FormItemContextValue } from "./form";


export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);
