import React from 'react';
import { mount } from 'enzyme';
import ResultsList from './ResultsList';

function setup() {
    const props = {
        entries: [
            {
                id: 1,
                name: 'Test entry',
                description: 'This is a test entry',
                postcode: 'B1 1BA'
            },{
                id: 2,
                name: 'Second entry',
                description: 'This is another a test entry',
                postcode: 'B2 2AB'
            }
        ],
        handleSelect: jest.fn()
    }
    const component = mount(<ResultsList {...props} />);

    return {props, component};
}

test('ResultsList component should render itself with expected ResultEntry components', () => {
    const {props, component} = setup();

    expect(component.find('ResultsEntry')).toHaveLength(2);
});

test('ResultsList should call its own handleSelect everytime handleSelect is called for a ResultsEntry', () => {
    const {props, component} = setup();
    const resultsEntry = component.find('ResultsEntry').first();

    resultsEntry.props().handleSelect();
    expect(props.handleSelect.mock.calls.length).toBe(1);
});