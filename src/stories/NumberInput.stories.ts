import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '../NumberInput';
import React from 'react';

const meta: Meta<typeof NumberInput> = {
    title: 'NumberInput',
    component: NumberInput,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        value: 0,
        onChange: v => console.log(v)
    }
};


export const AllowsNull: Story = {
    args: {
        value: null,
        allowNull: true,
        onChange: v => console.log(v)
    }
};


export const WithClassName: Story = {
    args: {
        value: 0,
        className: 'has-text-link has-text-weight-bold',
        onChange: v => console.log(v)
    }
};


export const CanBeDisabled: Story = {
    args: {
        value: 123,
        disabled: true
    }
};


export const CanSendFocusAndBlurEvents: Story = {
    args: {
        value: 1,
        onFocus: () => console.log('Focused'),
        onBlur: () => console.log('Blurred')
    }
};