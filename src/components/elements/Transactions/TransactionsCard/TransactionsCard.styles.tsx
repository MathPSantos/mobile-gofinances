import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { EFeatherIcon } from "../../../shared";

interface StyledProps {
  type: "income" | "spending";
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;

  padding: 16px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<StyledProps>`
  color: ${({ theme, type }) =>
    type === "income" ? theme.colors.success : theme.colors.critical};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(EFeatherIcon)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 12px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;
