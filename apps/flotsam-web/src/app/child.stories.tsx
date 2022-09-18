import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Child } from './child';

export default {
  component: Child,
  title: 'Child',
} as ComponentMeta<typeof Child>;

const Template: ComponentStory<typeof Child> = (args) => <Child {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
