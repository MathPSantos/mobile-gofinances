import { FlatList, FlatListProps } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

import { Data } from "./Transactions.component";

export const Container = styled.View``;

export const List = styled(
  FlatList as new (props: FlatListProps<Data>) => FlatList<Data>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() },
})``;
