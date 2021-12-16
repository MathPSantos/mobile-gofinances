import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
