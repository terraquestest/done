import React from 'react';
import s from './ResultsList.css';
import PropTypes from 'prop-types';

import ResultsEntry from '../ResultsEntry/ResultsEntry';

class ResultsList extends React.Component {
    render() {
        return(
            <div>
                {this.props.entries && Array.isArray(this.props.entries) ? 
                    this.props.entries.map(cv => {
                        return <ResultsEntry key={cv.id} 
                                            entry={cv} 
                                            handleSelect={this.props.handleSelect}
                                            isSelected={cv.id === this.props.selectedEntry} />;
                    })
                    :
                    'The list did not receive any entries'
                }
            </div>
        );
    }
}

ResultsList.propTypes = {
    entries: PropTypes.array,
    handleSelect: PropTypes.func,
    selectedEntry: PropTypes.number
}

export default ResultsList;