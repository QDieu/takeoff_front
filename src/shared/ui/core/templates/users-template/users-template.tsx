import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 32px;
  margin-left: 15%;
`;

type TProps = {
  content: React.ReactNode;
};

export const UsersTemplate: React.FC<TProps> = ({ content }) => {
  return <Wrapper>{content}</Wrapper>;
};
