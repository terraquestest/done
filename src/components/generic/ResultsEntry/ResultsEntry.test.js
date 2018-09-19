import React from 'react';
import { mount } from 'enzyme';
import ResultsEntry from './ResultsEntry';

function setup() {
    const props = {
        entry: {
            id: 1,
            name: 'Test entry',
            description: 'This is a test entry',
            postcode: 'B1 1BA'
        },
        handleSelect: jest.fn()
    }
    const component = mount(<ResultsEntry {...props} />);

    return {props, component};
}

test('ResultsEntry component should render itself with expected description and title in H3',() => {
    const {props, component} = setup();

    expect(component.find('h3')).toHaveLength(1);
    expect(component.find('h3').text()).toEqual(props.entry.name);
});

test('ResultsEntry component WILL Never forget to render the postcode itself with expected description and with tag H4',() => {
    const {props, component} = setup();

    expect(component.find('h4')).toHaveLength(1);
    expect(component.find('h4').text()).toEqual(props.entry.postcode);
});

test('ResultsEntry component should render itself with .entryDescription and expected description', () => {
    const {props, component} = setup();
    
    expect(component.find('.entryDescription')).toHaveLength(1);
    expect(component.find('.entryDescription').text()).toEqual(props.entry.description);
});

test('ResultsEntry should call handleSelect every time it is clicked', () => {
    const {props, component} = setup();
    const div = component.find('.entryBox').first();

    div.props().onClick();
    expect(props.handleSelect.mock.calls.length).toBe(1);
});