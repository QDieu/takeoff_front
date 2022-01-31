import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { ActionUserReducer } from "../../../features/redux/users-reducer";
import { Sidebar } from "../../../shared/ui/core/organisms";

export const SidebarConnector = () => {
  const dispatch = useDispatch();
  const itemsCategory = [
    ["city", "по городу"],
    ["company", "по компании"],
  ];

  const onClickCategory = (value: string) => {
    dispatch(ActionUserReducer.setSortBy(value));
  };

  return (
    <Sidebar onClickCategory={onClickCategory} itemsCategory={itemsCategory} />
  );
};
