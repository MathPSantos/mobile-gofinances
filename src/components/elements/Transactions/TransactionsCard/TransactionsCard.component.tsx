import React from "react";

import { Transaction } from "../../../../core/@types/Transaction.types";

import * as TC from "./TransactionsCard.styles";

interface TransactionsCardProps {
  data: Transaction;
}

export function TransactionsCard({
  data: { title, type, amount, category, date },
}: TransactionsCardProps) {
  const styledProps = {
    type,
  };

  return (
    <TC.Container>
      <TC.Title>{title}</TC.Title>

      <TC.Amount {...styledProps}>
        {type === "spending" && "- "}
        {amount}
      </TC.Amount>

      <TC.Footer>
        <TC.Category>
          <TC.Icon name={category.icon} />
          <TC.Name>{category.name}</TC.Name>
        </TC.Category>

        <TC.Date>{date}</TC.Date>
      </TC.Footer>
    </TC.Container>
  );
}
