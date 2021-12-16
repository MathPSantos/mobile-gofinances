import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as B from "./Button.styles";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <B.Container {...props}>
      <B.Title>{label}</B.Title>
    </B.Container>
  );
}
