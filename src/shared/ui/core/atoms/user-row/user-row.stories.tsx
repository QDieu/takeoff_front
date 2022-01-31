import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UserRow } from "./user-row";
import { TUser } from "../../../../types/User";

export default {
  title: "Atoms/UserDetailsRow",
  component: UserRow,
} as ComponentMeta<typeof UserRow>;

const Template: ComponentStory<typeof UserRow> = (args) => (
  <UserRow {...args} />
);

export const DetailsRow = Template.bind({});
DetailsRow.args = {
  user: {} as TUser,
  onClickInfo: () => {},
};
