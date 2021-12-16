import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.View`
  flex: 1;

  padding: 24px;
  justify-content: space-between;

  margin-bottom: ${getBottomSpace()};
`;

export const Fields = styled.View``;

export const TransactionsType = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;
