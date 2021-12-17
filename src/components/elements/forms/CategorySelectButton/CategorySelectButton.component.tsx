import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as CS from "./CategorySelectButton.styles";

interface CategorySelectButtonProps extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({
  title,
  ...props
}: CategorySelectButtonProps) {
  return (
    <CS.Container {...props} activeOpacity={0.7}>
      <CS.Category>{title}</CS.Category>

      <CS.Icon name="chevron-down" />
    </CS.Container>
  );
}
