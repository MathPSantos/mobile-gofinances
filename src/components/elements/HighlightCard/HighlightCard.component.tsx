import React from "react";

import * as HC from "./HighlightCard.styles";

export function HighlightCard() {
  return (
    <HC.Container>
      <HC.Header>
        <HC.Title>Entrada</HC.Title>
        <HC.Icon name="arrow-up-circle"></HC.Icon>
      </HC.Header>

      <HC.Content>
        <HC.Ammount>R$ 17.400,00</HC.Ammount>
        <HC.LastTransaction>Última entrada dia 13 de abril</HC.LastTransaction>
      </HC.Content>
    </HC.Container>
  );
}
