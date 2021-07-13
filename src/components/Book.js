import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category, removeBook }) => ( // eslint-disable-line
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
            <button type="button" onClick={() => removeBook(id)}>
                remove
            </button>
        </td>
    </tr>
);

Book.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    removeBook: PropTypes.func,
};

Book.defaultProps = {
    id: null,
    title: '',
    category: '',
    removeBook: null,
};

export default Book;