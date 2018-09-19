import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.css';

class Title extends React.Component {
    render() {
        return(
            <div className={s.title}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;