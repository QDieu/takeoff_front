import React from "react";
import styled from "styled-components";
import { TUser } from "../../../../types/User";
import { ProfileUserForm, ProfileUserHead } from "../../molecules";

const Wrapper = styled.div`
  width: 70%;
`;

type TProps = {
  user: TUser;
  editMode: boolean;
  onToggleEditMode: () => void;
  onSubmitForm: (data: { [key: string]: string }) => void;
};

export const UserProfile: React.FC<TProps> = ({
  user,
  editMode,
  onToggleEditMode,
  onSubmitForm,
}) => {
  return (
    <Wrapper>
      <ProfileUserHead onToggleEditMode={onToggleEditMode} />
      <ProfileUserForm
        user={user}
        editMode={editMode}
        onSubmitForm={onSubmitForm}
      />
    </Wrapper>
  );
};
