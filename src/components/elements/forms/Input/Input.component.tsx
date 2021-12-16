import React from "react";
import { TextInputProps } from "react-native";

import * as I from "./Input.styles";

interface InputProps extends TextInputProps {}

export function Input({ ...props }: InputProps) {
  return <I.Container {...props} />;
}
