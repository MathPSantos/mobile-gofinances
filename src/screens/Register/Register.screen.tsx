import React, { useState } from "react";

import { Input, Button, TransactionType } from "../../components/elements";

import { PageHeader, Stack } from "../../components/layout";

import * as R from "./Register.styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("income");

  function handleTransactionTypeSelect(type: "income" | "spending") {
    setTransactionType(type);
  }

  return (
    <R.Container>
      <PageHeader title="Cadastro" />

      <R.Form>
        <R.Fields>
          <Input placeholder="Nome" />
          <Stack size={8} />
          <Input placeholder="Valor" />
          <Stack size={8} />

          <R.TransactionsType>
            <TransactionType
              style={{ width: "49%" }}
              title="Receita"
              type="income"
              isActive={transactionType === "income"}
              onPress={() => handleTransactionTypeSelect("income")}
            />

            <TransactionType
              style={{ width: "49%" }}
              title="Desepesa"
              type="spending"
              isActive={transactionType === "spending"}
              onPress={() => handleTransactionTypeSelect("spending")}
            />
          </R.TransactionsType>
        </R.Fields>

        <Button label="Enviar" />
      </R.Form>
    </R.Container>
  );
}
