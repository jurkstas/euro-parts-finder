import * as React from "react";
import { FormFieldContextValue } from "./form";


export const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);
