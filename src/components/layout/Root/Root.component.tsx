import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "../../../core/styles/theme";

interface RootProps {
  children: ReactNode;
}

function Root({ children }: RootProps) {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!isFontsLoaded) return <AppLoading />;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { Root };
