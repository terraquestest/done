import {appReducer, initialState} from '../reducers/app';
import * as types from '../constants/ActionTypes';

describe('app reducer', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(
            initialState
        );
    });

    it('should handle SEARCH_ENTRY correctly for a name search', () => {
        expect(
            appReducer(initialState,
            {
                type: types.SEARCH_ENTRY,
                searchTerm: 'aman'
            })
        ).toEqual(
            {
                    searchTerm: 'aman',
                    searchResults: [{
                            id: 1,
                            name: "Amantia",
                            postcode: "B2 5RS",
                            description: "Contemporary dining room for a Spanish menu, sangria and tapas as well as occasional Flamenco.",
                        }],
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
                }
        );
    });

    it('should handle SEARCH_ENTRY correctly for a postcode search', () => {
        expect(
            appReducer(initialState,
            {
                type: types.SEARCH_ENTRY,
                searchTerm: 'B15'
            })
        ).toEqual(
            {
                    searchTerm: 'B15',
                    searchResults: [
                        {
                            id: 2,
                            name: "El Borracho de Oro",
                            postcode: "B15 3BU",
                            description: "Authentic Spanish tapas bar & restaurant, located in Edgbaston, Birmingham. We pride ourselves on the quality of our ingredients and the variety of flavours.",
                        }
                    ],
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
                }
        );
    });

    it('should handle SELECT_ENTRY correctly', () => {
        expect(appReducer(initialState,{
                type: types.SELECT_ENTRY,
                id: 3
            })).toEqual(
                {
                    searchTerm: '',
                    searchResults: [],
                    selectedEntry: {
                            id: 3,
                            name: "Tapas Revolution",
                            postcode: "B2 4XJ",
                            description: "Tapas Revolution by Omar Allibhoy a Spanish chef on a mission to bring Spanish food and its culture to the UK.",
                        },
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
                }
            );
    });

});