// import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

// export const Basic: Story = {};

export const primary1: Story = {
  render: () => <Input type="text" />,
};
