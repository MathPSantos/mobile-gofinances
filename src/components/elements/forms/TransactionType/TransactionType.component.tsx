import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as TT from "./TransactionType.styles";

interface TransactionTypeProps extends TouchableOpacityProps {
  title: string;
  type: "income" | "spending";
  isActive: boolean;
}

export function TransactionType({
  title,
  type,
  isActive,
  ...props
}: TransactionTypeProps) {
  const iconName = {
    income: "arrow-up-circle",
    spending: "arrow-down-circle",
  }[type];

  return (
    <TT.Container isActive={isActive} type={type} {...props}>
      <TT.Icon name={iconName} type={type} />
      <TT.Title>{title}</TT.Title>
    </TT.Container>
  );
}
