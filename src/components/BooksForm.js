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

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { createBook } = this.props'

        if (this.isInValid) return;

        if (createBook) {
            createBook(this.state);
        }

        this.setState({
          title: '',
          category: '',  
        });
    }

    render() {
        const categories = [
            'Action',
            'Biography',
            'History',
            'Horror',
            'Kids',
            'Learning',
            'Sci-Fi',
        ];
    }
}