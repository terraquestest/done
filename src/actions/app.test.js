import * as types from '../constants/ActionTypes';
import * as actions from './app';

describe('app actions', () => {

    it('should create an action to search an entry', () => {
        const searchTerm = 'test search';
        const expectedAction = {
            type: types.SEARCH_ENTRY,
            searchTerm
        };

        expect(actions.searchEntry(searchTerm)).toEqual(expectedAction);
    });

    it('should create an action to select an entry', () => {
        const id = 3;
        const expectedAction = {
            type: types.SELECT_ENTRY,
            id
        };

        expect(actions.selectEntry(id)).toEqual(expectedAction);
    });

});