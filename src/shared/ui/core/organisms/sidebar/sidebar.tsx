import React from "react";
import styled from "styled-components";
import { MainTabs } from "../../molecules";

const Wrapper = styled.div`
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  box-sizing: border-box;

  background-color: #bdbdbd;
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-family: "Roboto";
`;

const Top = styled.div``;

type TProps = {
  itemsCategory: string[][];
  onClickCategory: (value: string) => void;
};

export const Sidebar: React.FC<TProps> = ({
  itemsCategory,
  onClickCategory,
}) => {
  return (
    <Wrapper>
      <Top>
        <TextWrapper>Сортировка</TextWrapper>
        <MainTabs
          itemsCategory={itemsCategory}
          onClickCategory={onClickCategory}
        />
      </Top>
    </Wrapper>
  );
};
