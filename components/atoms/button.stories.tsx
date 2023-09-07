// import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./buttons";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

// export const Basic: Story = {};

export const destructive: Story = {
  render: () => <Button variant={"destructive"}>Delete</Button>,
  args: {
    variant: "destructive",
  },
};

export const primary: Story = {
  render: () => <Button>Primary</Button>,
  args: {
    variant: "default",
  },
};

export const ghost: Story = {
  render: () => <Button variant={"ghost"}>Ghost</Button>,
  args: {
    variant: "ghost",
  },
};
