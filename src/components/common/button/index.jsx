import React from 'react';

export const Button = props => {
  const { label, onClick } = props;

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={ onClick }>{ label }</button>
  );
};