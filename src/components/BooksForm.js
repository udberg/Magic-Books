import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}