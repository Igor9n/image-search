import React from 'react';

export const Search = props => {
  const { value, onChange } = props;

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Tags"
        value={ value }
        onChange={ onChange }/>
    </div>
  );
};