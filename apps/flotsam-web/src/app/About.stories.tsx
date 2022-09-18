import { ComponentStory, ComponentMeta } from '@storybook/react';
import { About } from './About';

export default {
  component: About,
  title: 'About',
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args: any) => <About {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
