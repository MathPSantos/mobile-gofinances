import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface StyledProps {
  size: number;
}

export const Stack = styled.View<StyledProps>`
  width: 100%;
  height: ${({ size }) => RFValue(size)}px;
`;
