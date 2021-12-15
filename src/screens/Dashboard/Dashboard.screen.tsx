import React from "react";
import { View, Text } from "react-native";

import { Container } from "../../components/layout";
import { Header } from "../../components/layout";

import * as D from "./Dashboard.styles";

function Dashboard() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export { Dashboard };
