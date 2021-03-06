import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;

  padding: 0 24px;
  margin-top: ${RFPercentage(14)}px;
`;
