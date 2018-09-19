import React from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.css';

import Title from '../Title/Title';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleSearch(event.target.value);
    }

    render() {
        return(
            <div>
                <Title title="The Tapas Directory" />
                <form>
                    <div className='form-group has-feedback'>
                        <input type='text' className='form-control' id='search-box' onChange={this.handleChange} />
                        <span className='glyphicon glyphicon-search form-control-feedback' aria-hidden='true'></span>
                    </div>
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;