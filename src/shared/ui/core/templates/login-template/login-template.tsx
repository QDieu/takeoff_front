import React from "react";
import styled from "styled-components";
import { Icons } from "../../../icons";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

type TProps = {
  content: React.ReactNode;
};

export const LoginTemplate: React.FC<TProps> = ({ content }) => {
  return (
    <Wrapper>
      {content}
      <IconWrapper>
        <Icons.SecondVector />
      </IconWrapper>
      <IconWrapper>
        <Icons.FirstVector />
      </IconWrapper>
    </Wrapper>
  );
};
