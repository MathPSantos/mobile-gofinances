import React from "react";
import * as PH from "./PageHeader.styles";

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <PH.Container>
      <PH.Title>{title}</PH.Title>
    </PH.Container>
  );
}
