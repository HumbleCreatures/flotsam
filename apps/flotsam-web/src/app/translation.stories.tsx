import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TranslatedComponent } from './translation';

export default {
  component: TranslatedComponent,
  title: 'TranslatedComponent',
} as ComponentMeta<typeof TranslatedComponent>;

const Template: ComponentStory<typeof TranslatedComponent> = (args) => (
  <TranslatedComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
