import React from 'react';
import PropTypes from 'prop-types';
import s from './ResultsEntry.css';

class ResultsEntry extends React.Component {
    render() {
        return(
            <div>
                <div className={`entryBox ${this.props.isSelected ? s.selected + ' selected' : ''}`} onClick={() => {this.props.handleSelect(this.props.entry.id)}}>
                    <h3>{this.props.entry.name}</h3>
                    <div className='entryDescription'>
                        {this.props.entry.description}
                    </div>
                    <h4>{this.props.entry.postcode}</h4>
                </div>
                <hr />
            </div>
        );
    }
}

ResultsEntry.propTypes = {
    entry: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool
}

export default ResultsEntry;