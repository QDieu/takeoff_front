import React from "react";
import {
  ActionUserReducer,
  fetchUser,
} from "../../../features/redux/users-reducer";
import { UsersPage } from "../../../shared/ui/core/pages";
import { useDispatch, useSelector } from "react-redux";
import { TAppState } from "../../../features/redux/store";
import { TUser } from "../../../shared/types/User";
import { useNavigate } from "react-router";
import { SpinnerCircular } from "spinners-react";
import { createUser } from "../../../shared/lib";

export const UserPageConnector = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: TAppState) => state.usersPage);
  const { isFetching } = useSelector((state: TAppState) => state.usersPage);

  const navigate = useNavigate();

  const [filter, setFilter] = React.useState("");
  const [filterUser, setFilterUser] = React.useState<Array<TUser>>([]);

  React.useEffect(() => {
    dispatch(fetchUser());
    setFilterUser(users.filter((item) => item.name.includes(filter)));
  }, []);

  React.useEffect(() => {
    setFilterUser(users.filter((item) => item.name.includes(filter)));
  }, [filter]);

  const onClickInfo = (user: TUser) => {
    navigate("/user", { state: { currentUser: user } });
  };

  const onSubmitAddUserForm = (data: { [key: string]: string }) => {
    const newUser = createUser(data);
    dispatch(ActionUserReducer.addUser(newUser));
  };

  const onChangeText = (value: string) => {
    setFilter(value);
  };

  const clearValue = () => {
    setFilter("");
  };

  return isFetching ? (
    <SpinnerCircular
      color={"#4b51ef"}
      style={{ marginLeft: "50%", marginTop: "15%" }}
      size={200}
    />
  ) : (
    <UsersPage
      users={filterUser}
      onClickInfo={onClickInfo}
      onSubmitAddUserForm={onSubmitAddUserForm}
      value={filter}
      onChangeText={onChangeText}
      clearValue={clearValue}
    />
  );
};
