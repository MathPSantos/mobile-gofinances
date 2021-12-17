import React, { useState } from "react";
import { Modal } from "react-native";

import {
  Input,
  Button,
  TransactionType,
  CategorySelectButton,
} from "../../components/elements";

import { PageHeader, Stack } from "../../components/layout";
import { Category } from "../../core/@types/Transaction.types";
import { CategorySelect } from "../CategorySelect/CategorySelect.screen";

import * as R from "./Register.styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("income");
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState<Category>({
    key: "category",
    name: "Categoria",
    icon: "any",
  });

  function handleTransactionTypeSelect(type: "income" | "spending") {
    setTransactionType(type);
  }

  function toggleIsCategoryModalOpen() {
    setIsCategoryModalOpen((prevValue) => !prevValue);
  }

  return (
    <R.Container>
      <PageHeader title="Cadastro" />

      <R.Form>
        <R.Fields>
          <Input placeholder="Nome" />
          <Stack size={8} />
          <Input placeholder="Valor" />
          <Stack size={16} />

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
          <Stack size={16} />

          <CategorySelectButton
            title={category.name}
            onPress={toggleIsCategoryModalOpen}
          />
        </R.Fields>

        <Button label="Enviar" />
      </R.Form>

      <Modal visible={isCategoryModalOpen}>
        <CategorySelect
          category={category}
          onSelectCategory={setCategory}
          onClose={toggleIsCategoryModalOpen}
        />
      </Modal>
    </R.Container>
  );
}
