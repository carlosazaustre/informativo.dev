import React from "react";
import { IconVote } from "./IconVote";

export default {
  title: "Icons/IconVote",
  component: IconVote,
};

const Story = (args) => <IconVote {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  color: "#ff6600",
  size: 16,
};
