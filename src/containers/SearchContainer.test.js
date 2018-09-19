import React from 'react';
import { mount } from 'enzyme';
import { SearchContainer } from './SearchContainer';

function setup() {
    const props = {
        appState: {
            searchTerm: '',
            searchResults: [],
            selectedEntry: null,
            entries: [
                {
                    id: 1,
                    name: "Amantia",
                    postcode: "B2 5RS",
                    description: "Contemporary dining room for a Spanish menu, sangria and tapas as well as occasional Flamenco.",
                },
                {
                    id: 2,
                    name: "El Borracho de Oro",
                    postcode: "B15 3BU",
                    description: "Authentic Spanish tapas bar & restaurant, located in Edgbaston, Birmingham. We pride ourselves on the quality of our ingredients and the variety of flavours.",
                },
                {
                    id: 3,
                    name: "Tapas Revolution",
                    postcode: "B2 4XJ",
                    description: "Tapas Revolution by Omar Allibhoy a Spanish chef on a mission to bring Spanish food and its culture to the UK.",
                },
                {
                    id: 4,
                    name: "Rico Libre Tapas",
                    postcode: "B5 5QD",
                    description: "Among the very best additions to Brum's foodie scene in 2014, Rico Libre has already established itself as a tapas trailblazer.",
                }
            ]
        },
        searchEntry: jest.fn(),
        selectEntry: jest.fn()
    };
    const component = mount(<SearchContainer {...props} />);

    return {props, component};
}

test('SearchContainer should render a SearchBar', () => {
    const {props, component} = setup();

    expect(component.find('SearchBar')).toHaveLength(1);
});

test('SearchContainer should render a ResultsList if there is no searchTerm in appState', () => {
    const {props, component} = setup();

    expect(component.find('ResultsList')).toHaveLength(1);
});

test('SearchContainer should render a ResultsList if there is a searchTerm and searchResults in appState', () => {
    const {props, component} = setup();
    const newProps = Object.assign({}, props, {
        appState: {
            searchTerm: 'aman',
            searchResults: [
                {
                    id: 1,
                    name: "Amantia",
                    postcode: "B2 5RS",
                    description: "Contemporary dining room for a Spanish menu, sangria and tapas as well as occasional Flamenco.",
                }
            ]
        }
    });
    component.setProps(newProps);

    expect(component.find('ResultsList')).toHaveLength(1);
});

test('SearchContainer should not render a ResultsList if there is a searchTerm and not searchResults in appState', () => {
    const {props, component} = setup();
    const newProps = Object.assign({}, props, {
        appState: {
            searchTerm: 'test',
            searchResults: []
        }
    });
    component.setProps(newProps);

    expect(component.find('ResultsList')).toHaveLength(0);
});

test('SearchContainer should always render the right number of results', () => {
    const {props, component} = setup();

    expect(component.find('ResultsEntry')).toHaveLength(4);

    const newProps = Object.assign({}, props, {
        appState: {
            searchTerm: 'test',
            searchResults: []
        }
    });
    component.setProps(newProps);
    expect(component.find('ResultsEntry')).toHaveLength(0);

    const newProps2 = Object.assign({}, props, {
        appState: {
            searchTerm: 'tapas',
            searchResults: [
                {
                    id: 3,
                    name: "Tapas Revolution",
                    postcode: "B2 4XJ",
                    description: "Tapas Revolution by Omar Allibhoy a Spanish chef on a mission to bring Spanish food and its culture to the UK.",
                },
                {
                    id: 4,
                    name: "Rico Libre Tapas",
                    postcode: "B5 5QD",
                    description: "Among the very best additions to Brum's foodie scene in 2014, Rico Libre has already established itself as a tapas trailblazer.",
                }
            ]
        }
    });
    component.setProps(newProps2);
    expect(component.find('ResultsEntry')).toHaveLength(2);

    component.setProps(props);
    expect(component.find('ResultsEntry')).toHaveLength(4);
});

test('SearchContainer should call selectEntry everytime handleSelect es received from ResultsList', () => {
    const {props, component} = setup();
    const resultsList = component.find('ResultsList');

    resultsList.props().handleSelect();
    expect(props.selectEntry.mock.calls.length).toBe(1);
});