import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MuiButton } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MyApp/Button',
  component: MuiButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   
  },
} as ComponentMeta<typeof MuiButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MuiButton> = (args) => <MuiButton {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  disabled: false,
  label: 'Button',
  variant: 'text'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   disabled: true,
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
