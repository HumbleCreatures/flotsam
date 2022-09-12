import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FlotsamUi } from './flotsam-ui';

export default {
  component: FlotsamUi,
  title: 'FlotsamUi',
} as ComponentMeta<typeof FlotsamUi>;

const Template: ComponentStory<typeof FlotsamUi> = (args) => (
  <FlotsamUi {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
