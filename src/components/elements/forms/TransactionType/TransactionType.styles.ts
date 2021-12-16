import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

import { EFeatherIcon } from "../../../shared";

interface StyledProps {
  type: "income" | "spending";
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<StyledProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;

  padding: 16px;

  ${({ isActive, type }) =>
    isActive &&
    type === "income" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: none;
    `};

  ${({ isActive, type }) =>
    isActive &&
    type === "spending" &&
    css`
      background-color: ${({ theme }) => theme.colors.critical_light};
      border: none;
    `};
`;

export const Icon = styled(EFeatherIcon)<StyledProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === "income" ? theme.colors.success : theme.colors.critical};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
