import React from "react";
import { Input } from "../../components/elements";
import { Button } from "../../components/elements";

import { PageHeader, Stack } from "../../components/layout";

import * as R from "./Register.styles";

export function Register() {
  return (
    <R.Container>
      <PageHeader title="Cadastro" />

      <R.Form>
        <R.Fields>
          <Input placeholder="Nome" />
          <Stack size={8} />
          <Input placeholder="Nome" />
        </R.Fields>

        <Button label="Enviar" />
      </R.Form>
    </R.Container>
  );
}
