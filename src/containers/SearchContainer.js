import React from 'react';

import SearchBar from '../components/generic/SearchBar/SearchBar';
import ResultsList from '../components/generic/ResultsList/ResultsList';

import { searchEntry, selectEntry } from '../actions/app';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class SearchContainer extends React.Component {
    render() {
        const RESULTS_SOURCE = this.props.appState.searchTerm ? this.props.appState.searchResults : this.props.appState.entries;

        return (
            <div>
                <SearchBar handleSearch={this.props.searchEntry} />
                {!this.props.appState.searchTerm || this.props.appState.searchResults.length > 0 ? 
                    <ResultsList entries={RESULTS_SOURCE} 
                                handleSelect={this.props.selectEntry} 
                                selectedEntry={this.props.appState.selectedEntry ? this.props.appState.selectedEntry.id : 0} /> 
                    : 
                    'No entries found'
                }
            </div>
        );
    }
}

function mapStateToProps(appState) {
    return { appState };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchEntry, selectEntry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);