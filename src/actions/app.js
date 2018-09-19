import {SEARCH_ENTRY, SELECT_ENTRY} from '../constants/ActionTypes';

export function searchEntry(searchTerm) {
    return {
        type: SEARCH_ENTRY,
        searchTerm
    }
}

export function selectEntry(id) {
    return {
        type: SELECT_ENTRY,
        id
    }
}
