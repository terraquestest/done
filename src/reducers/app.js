import { SEARCH_ENTRY, SELECT_ENTRY } from '../constants/ActionTypes';

// Initial state model
export const initialState = {
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
}

export function appReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_ENTRY:
            return Object.assign({}, state, {
                searchResults: state.entries.reduce((acc, cv) => {
                    if(cv.name.toUpperCase().indexOf(action.searchTerm.toUpperCase()) > -1 || cv.postcode.toUpperCase().indexOf(action.searchTerm.toUpperCase()) > -1) {
                        return acc.concat([cv]);
                    }
                    return acc;
                }, []),
                searchTerm: action.searchTerm
            });
        case SELECT_ENTRY:
            return Object.assign({}, state, {
                selectedEntry: state.entries.reduce((acc, cv) => {
                    if(!acc && cv.id === action.id) {
                        return cv;
                    }
                    return acc;
                }, null)
            })
        default: 
            return state;
    }
    return state;
}