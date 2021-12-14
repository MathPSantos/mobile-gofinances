import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "../../../core/styles/theme";

interface RootProps {
  children: ReactNode;
}

function Root({ children }: RootProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { Root };
