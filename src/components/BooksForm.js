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

    get isValid() {
        const { title, category } = this.state;
        return title && category;
    }

    get isInValid() {
        return !this.isValid;
    }
}