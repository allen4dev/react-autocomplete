import React from 'react';

import TrackList from './../../modules/tracks/components/TrackList';

import Form from './../../shared/Form';

import './index.css';

const Autocomplete = () => {
  return (
    <div className="Autocomplete">
      <Form />
      <TrackList />
    </div>
  );
};

export default Autocomplete;
