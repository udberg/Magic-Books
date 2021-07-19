import React, { Component } from 'react';
import PropTypes from 'prop-types';
import categories from '../helper/category';

class BooksForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
        };

        this.handChange = this.handChange.bind(this);
        this.handSubmit = this.handleSubmit.bind(this);
    }

    get isValid() {
        const { title, category, } = this.state;
        return title && category;
    }

    get isInValid() {
        return !this.isValid;
    }
}