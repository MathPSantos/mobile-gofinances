import React from "react";
import { Text, View } from "react-native";

import * as TC from "./TransactionsCard.styles";

interface TransactionsCardProps {}

export function TransactionsCard({}: TransactionsCardProps) {
  return (
    <TC.Container>
      <TC.Title>Desenvolvimento de site</TC.Title>

      <TC.Amount>R$ 12.000,00</TC.Amount>

      <TC.Footer>
        <TC.Category>
          <TC.Icon name="dollar-sign" />
          <TC.Name>Vendas</TC.Name>
        </TC.Category>

        <TC.Date>13/04/2021</TC.Date>
      </TC.Footer>
    </TC.Container>
  );
}
