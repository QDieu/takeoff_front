import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProfileUserHead } from "./profile-user-head";

export default {
  title: "Atoms/ProfileUserForm",
  component: ProfileUserHead,
} as ComponentMeta<typeof ProfileUserHead>;

const Template: ComponentStory<typeof ProfileUserHead> = (args) => (
  <ProfileUserHead {...args} />
);

export const DetailsRow = Template.bind({});
DetailsRow.args = {};
