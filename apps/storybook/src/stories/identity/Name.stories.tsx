import type { Meta, StoryObj } from '@storybook/react';
import { Name } from './Name';
import { BY_USER } from '../fixture';
import { withQueryClientProvider, } from '../decorators/wagmi';

const meta = {
    title: 'Identity/Name/Name',
    component: Name,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof Name>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
    args: {
        addressOrEns: BY_USER.vitalik.address,
    },
    decorators: [
        withQueryClientProvider()
    ],
};
