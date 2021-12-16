import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { EFeatherIcon } from "../../shared";

import { HighlightCardVariantTypes } from "./HighlightCard.component";
interface StyledProps {
  variant: HighlightCardVariantTypes;
}

export const Container = styled.View<StyledProps>`
  background-color: ${({ theme, variant }) =>
    variant === "total" ? theme.colors.secondary : theme.colors.white};

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

export const Title = styled.Text<StyledProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, variant }) =>
    variant === "total" ? theme.colors.white : theme.colors.black};
`;

export const Icon = styled(EFeatherIcon)<StyledProps>`
  font-size: ${RFValue(40)}px;

  ${({ variant }) =>
    variant === "income" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ variant }) =>
    variant === "spending" &&
    css`
      color: ${({ theme }) => theme.colors.critical};
    `}

  ${({ variant }) =>
    variant === "total" &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const Content = styled.View``;

export const Amount = styled.Text<StyledProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, variant }) =>
    variant === "total" ? theme.colors.white : theme.colors.black};

  margin-top: 38px;
`;

export const Description = styled.Text<StyledProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme, variant }) =>
    variant === "total" ? theme.colors.white : theme.colors.text};
`;
