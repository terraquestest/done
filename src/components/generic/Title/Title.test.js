import React from 'react';
import { mount } from 'enzyme';
import Title from './Title';

function setup() {
    const props = {
        title: 'Tapas Directory'
    };
    const component = mount(<Title {...props} />);

    return {props, component};
}

test('Title should render a H1 containing the title', () => {
    const {props, component} = setup();

    expect(component.find('h1')).toHaveLength(1);
    expect(component.find('h1').text()).toBe(props.title);
});