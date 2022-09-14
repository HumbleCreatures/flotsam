import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonStyledComponents from './ButtonStyledComponents';

export default {
  component: ButtonStyledComponents,
  title: 'ButtonStyledComponents',
} as ComponentMeta<typeof ButtonStyledComponents>;

const Template: ComponentStory<typeof ButtonStyledComponents> = (args) => (
  <ButtonStyledComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
