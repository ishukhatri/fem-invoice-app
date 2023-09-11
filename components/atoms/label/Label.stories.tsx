// import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

// export const Basic: Story = {};

export const primary1: Story = {
  render: () => <Label>Street Address</Label>,
};
