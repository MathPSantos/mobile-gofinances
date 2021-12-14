import React from "react";
import { View, Text } from "react-native";

import { Container } from "../../components/layout";

import * as D from "./Dashboard.styles";

function Dashboard() {
  return (
    <Container>
      <D.Title>Dashboard</D.Title>
    </Container>
  );
}

export { Dashboard };
