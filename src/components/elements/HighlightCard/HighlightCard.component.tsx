import React from "react";

import * as HC from "./HighlightCard.styles";

export type HighlightCardVariantTypes = "income" | "spending" | "total";
interface HighlightCardProps {
  title: string;
  amount: string;
  description: string;
  variant?: HighlightCardVariantTypes;
}

export function HighlightCard({
  title,
  amount,
  description,
  variant = "income",
}: HighlightCardProps) {
  const cardIcon = {
    income: "arrow-up-circle",
    spending: "arrow-down-circle",
    total: "dollar-sign",
  }[variant];

  const styledProps = {
    variant,
  };

  return (
    <HC.Container {...styledProps}>
      <HC.Header>
        <HC.Title {...styledProps}>{title}</HC.Title>
        <HC.Icon name={cardIcon} {...styledProps} />
      </HC.Header>

      <HC.Content>
        <HC.Amount {...styledProps}>{amount}</HC.Amount>
        <HC.Description {...styledProps}>{description}</HC.Description>
      </HC.Content>
    </HC.Container>
  );
}
