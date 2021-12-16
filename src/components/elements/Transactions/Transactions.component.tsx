import React from "react";
import { View } from "react-native";
import { Title } from "../";

import * as T from "./Transactions.styles";

import { TransactionsCard } from "./TransactionsCard";

Transactions.Card = TransactionsCard;

interface TransactionsProps {
  title: string;
}

export function Transactions({ title }: TransactionsProps) {
  return (
    <View>
      <Title style={{ marginBottom: 16 }}>{title}</Title>

      <Transactions.Card />
    </View>
  );
}
