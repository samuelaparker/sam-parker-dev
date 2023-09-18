import * as React from 'react'
import Nav from '../nav'


//👇 This default export determines where your story goes in the story list
export default {
  title: 'Nav',
  component: Nav,
  argTypes: {
    testProp: {
      options: ['dingus', 'mcgee'],
      control: { type: 'radio' }
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Nav {...args} />;

//one method
/* export const Primary = () => <Nav /> */


export const Primary = Template.bind({});
Primary.args = {
  testProp: 'dingus',
}
export const Secondary = Template.bind({});
Secondary.args = {
  testProp: 'mcgee',
}


// export const Mobile = Template.bind({});
// Mobile.args = {
//   mobile: true,
// };


// Nav.args = {
//   /*👇 The args you need here will depend on your component */
//   controls: { hideNoControlsWarning: true },
// };
