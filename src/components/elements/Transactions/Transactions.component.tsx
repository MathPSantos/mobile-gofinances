import React from "react";
import { View } from "react-native";

import { Transaction } from "../../../core/@types/Transaction.types";

import { Title } from "../";
import { TransactionsCard } from "./TransactionsCard";

import * as T from "./Transactions.styles";

Transactions.Card = TransactionsCard;

export interface Data extends Transaction {
  id: string;
}

interface TransactionsProps {
  title: string;
  data: Data[];
}

export function Transactions({ title, data }: TransactionsProps) {
  return (
    <T.Container>
      <Title style={{ marginBottom: 16 }}>{title}</Title>

      <T.List
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Transactions.Card data={item} />}
      />
    </T.Container>
  );
}
