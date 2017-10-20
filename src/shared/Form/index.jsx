import React from 'react';

import './index.css';

const Form = () => {
  return (
    <form className="Form" onSubmit={e => e.preventDefault()}>
      <input
        className="Form-input"
        type="text"
        placeholder="Search..."
        onChange={e => console.log(e.target.value)}
      />
    </form>
  );
};

export default Form;
