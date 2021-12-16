import React from "react";
import { View, Text } from "react-native";
import {
  HighlightCard,
  HighlightCardList,
  Transactions,
} from "../../components/elements";

import { Transaction } from "../../core/@types/Transaction.types";

import { Header } from "../../components/layout";

import * as D from "./Dashboard.styles";

type DataTransactions = Transaction & {
  id: string;
};

const data: DataTransactions[] = [
  {
    id: "1",
    type: "income",
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      icon: "dollar-sign",
      name: "Vendas",
    },
    date: "13/04/2021",
  },
  {
    id: "2",
    type: "spending",
    title: "Hamburgueria Peace",
    amount: "R$ 87,00",
    category: {
      icon: "coffee",
      name: "Alimentação",
    },
    date: "13/04/2021",
  },
  {
    id: "3",
    type: "spending",
    title: "Aluguel do apartamento",
    amount: "R$ 1.200,00",
    category: {
      icon: "shopping-bag",
      name: "Casa",
    },
    date: "13/04/2021",
  },
];

export function Dashboard() {
  return (
    <D.Container>
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

      <D.Content>
        <Transactions title="Listagem" data={data} />
      </D.Content>
    </D.Container>
  );
}
