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
