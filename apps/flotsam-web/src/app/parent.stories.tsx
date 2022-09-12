import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Parent } from './parent';

export default {
  component: Parent,
  title: 'Parent',
} as ComponentMeta<typeof Parent>;

const Template: ComponentStory<typeof Parent> = (args) => <Parent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
