import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { EFeatherIcon } from "../../../shared";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  padding: 16px 18px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(EFeatherIcon)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
