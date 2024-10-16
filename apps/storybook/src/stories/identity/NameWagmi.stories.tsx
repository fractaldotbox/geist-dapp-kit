import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import { Hex } from 'viem';
import { NameWagmi } from './NameWagmi';
import { Address } from './Address';
import { BY_USER } from '../fixture';
import { withWagmiProvider } from '../decorators/wagmi';

const meta = {
    title: 'Identity/Name/NameWagmi',
    component: NameWagmi,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof NameWagmi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
    args: {
        addressOrEns: BY_USER.vitalik.address,
    },
    decorators: [
        withWagmiProvider()
    ],
};
