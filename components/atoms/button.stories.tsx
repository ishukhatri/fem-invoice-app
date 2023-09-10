// import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./buttons";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

// export const Basic: Story = {};

export const markAsPaid: Story = {
  render: () => <Button variant={"primary1"}>Mark as Paid</Button>,
};
