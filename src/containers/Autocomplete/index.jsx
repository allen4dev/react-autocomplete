import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';

import TrackList from './../../modules/tracks/components/TrackList';

import Form from './../../shared/Form';

import './index.css';

import api from './../../utils/api';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.fillForm = debounce(500, this.fillForm);

    this.state = {
      term: '',
      results: [],
      message: 'Search something',
    };
  }

  handleChange = e => {
    const term = e.target.value;

    this.fillForm(term);

    this.setState({ term });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ term: '' });
  };

  async fillForm(term) {
    const search = term.toLowerCase();

    if (search.length === 0) {
      return this.setState({ results: [], message: 'Search something' });
    }

    const results = await api.searchTracks(search);

    return results.length > 0
      ? this.setState({ results, message: '' })
      : this.setState({ results: [], message: 'No results found' });
  }

  render() {
    return (
      <div className="Autocomplete">
        <Form
          placeholder="Search..."
          value={this.state.term}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TrackList items={this.state.results} message={this.state.message} />
      </div>
    );
  }
}

export default Autocomplete;
