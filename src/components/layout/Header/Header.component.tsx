import React from "react";

import * as H from "./Header.styles";

function Header() {
  return (
    <H.Container>
      <H.UserContainer>
        <H.UserInfo>
          <H.Avatar source={{ uri: "https://github.com/MathPSantos.png" }} />

          <H.User>
            <H.Greeting>Olá,</H.Greeting>
            <H.UserName>Rodrigo</H.UserName>
          </H.User>
        </H.UserInfo>

        <H.LoggoutIcon name="power" />
      </H.UserContainer>
    </H.Container>
  );
}

export { Header };
