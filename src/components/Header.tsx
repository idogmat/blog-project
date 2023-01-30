import React from "react";
import { HeaderWrapper } from "../ui/HeaderWrapper";
import { Flex } from "../ui/Flex";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Flex fDirection={"row"} justify={"center"}>
        <div>
          <p>Blogger Platform</p>
          <p>Superadmin</p>
        </div>
      </Flex>
    </HeaderWrapper>
  );
};
