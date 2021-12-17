import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../../components/elements";

import { Category } from "../../core/@types/Transaction.types";
import { categories } from "../../core/utils/categories";

import * as CS from "./CategorySelect.styles";

interface CategorySelectProps {
  category: Category;
  onSelectCategory: (category: Category) => void;
  onClose: () => void;
}

export function CategorySelect({
  category,
  onSelectCategory,
  onClose,
}: CategorySelectProps) {
  function handleCategorySelect(category: Category) {
    onSelectCategory(category);
  }

  return (
    <CS.Container>
      <CS.Header>
        <CS.Title>Categoria</CS.Title>
      </CS.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CS.Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <CS.Icon name={item.icon} />
            <CS.Name>{item.name}</CS.Name>
          </CS.Category>
        )}
        ItemSeparatorComponent={() => <CS.Separator />}
      />

      <CS.Footer>
        <Button label="Selecionar" onPress={onClose} />
      </CS.Footer>
    </CS.Container>
  );
}
