import type { Meta, StoryObj } from '@storybook/react';
import { LoginView } from '../LoginView';
import { MockHttpClient } from '../helpers/MockHttpClient';

const meta: Meta<typeof LoginView> = {
    title: 'LoginView',
    component: LoginView,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const notuClient = new MockHttpClient();


export const Primary: Story = {
    args: {
        notuClient: notuClient as any,
        onLogin: async () => {
            console.log('Logged in', notuClient);
        }
    }
}