import React from "react";
import { TUser } from "../../../../types/User";
import { UserProfile } from "../../organisms";
import { UsersTemplate } from "../../templates";

type TProps = {
  user: TUser;
  editMode: boolean;
  onToggleEditMode: () => void;
  onSubmitForm: (data: { [key: string]: string }) => void;
};

export const UserProfilePage: React.FC<TProps> = ({
  user,
  editMode,
  onToggleEditMode,
  onSubmitForm,
}) => {
  return (
    <UsersTemplate
      content={
        <UserProfile
          user={user}
          editMode={editMode}
          onToggleEditMode={onToggleEditMode}
          onSubmitForm={onSubmitForm}
        />
      }
    />
  );
};
