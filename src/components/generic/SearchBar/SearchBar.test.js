import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';

function setup() {
    const props = {
        handleSearch: jest.fn()
    };
    const component = mount(<SearchBar {...props} />);

    return {props, component};
}

test('SearchBar should render an input box', () => {
    const {props, component} = setup();

    expect(component.find('input[type="text"]')).toHaveLength(1);
});

test('SearchBar should call handleSearch every time value changes', () => {
    const {props, component} = setup();
    const input = component.find('input[type="text"]');

    input.props().onChange({target: {value: 'test search'}});
    expect(props.handleSearch.mock.calls.length).toBe(1);

    input.props().onChange({target: {value: ''}});
    expect(props.handleSearch.mock.calls.length).toBe(2);
});