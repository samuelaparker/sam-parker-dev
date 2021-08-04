import React from 'react'
import Nav from '../nav'


//👇 This default export determines where your story goes in the story list
export default {
  title: 'Nav',
  component: Nav,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Nav {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Nav',
};

Nav.args = {
  /*👇 The args you need here will depend on your component */
  controls: { hideNoControlsWarning: true },
};

//