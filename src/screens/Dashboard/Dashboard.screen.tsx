import React from "react";
import { View, Text } from "react-native";
import { HighlightCard, HighlightCardList } from "../../components/elements";

import { Container } from "../../components/layout";
import { Header } from "../../components/layout";

import * as D from "./Dashboard.styles";

function Dashboard() {
  return (
    <Container>
      <Header />

      <HighlightCardList>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          description="Última entrada dia 13 de abril"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          description="Última entrada dia 03 de abril"
          variant="spending"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          description="01 à 06 de abril"
          variant="total"
        />
      </HighlightCardList>
    </Container>
  );
}

export { Dashboard };
