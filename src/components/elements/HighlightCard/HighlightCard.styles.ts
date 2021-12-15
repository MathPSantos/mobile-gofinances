import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { EFeatherIcon } from "../../shared";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};

  width: ${RFValue(300)}px;
  border-radius: 4px;

  padding: 20px 24px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.black};
`;

export const Icon = styled(EFeatherIcon)`
  font-size: ${RFValue(40)}px;
`;

export const Content = styled.View``;

export const Ammount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme }) => theme.colors.black};

  margin-top: 38px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text};
`;
