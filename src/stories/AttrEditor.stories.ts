import type { Meta, StoryObj } from '@storybook/react';
import { AttrEditor } from '../AttrEditor';
import { Attr, Space } from 'notu';

const meta = {
    title: 'AttrEditor',
    component: AttrEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof AttrEditor>;
export default meta;

type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        attr: new Attr('Test'),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onConfirm: () => {
            console.log('Confirm clicked');
            return null;
        }
    }
}


export const ShowsErrorMessageOnConfirm: Story = {
    args: {
        attr: new Attr('Test'),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onConfirm: () => {
            console.log('Confirm clicked');
            return 'Something went wrong!';
        }
    }
}