import React from "react";
import { useLocation } from "react-router";
import { TUser } from "../../../shared/types/User";
import { UserProfilePage } from "../../../shared/ui/core/pages";

type MyState = {
  currentUser: TUser;
};

export const UserProfilePageConnector = () => {
  const [editMode, setEditMode] = React.useState(true);

  const location = useLocation();
  const state = location.state as MyState;

  const onToggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmitForm = (data: { [key: string]: string }) => {
    console.log(JSON.stringify(data));
  };

  return (
    <UserProfilePage
      user={state.currentUser}
      editMode={editMode}
      onToggleEditMode={onToggleEditMode}
      onSubmitForm={onSubmitForm}
    />
  );
};
