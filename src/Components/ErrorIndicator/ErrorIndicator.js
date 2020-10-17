import React from 'react';

import './ErrorIndicator.css';
import errorImg from './error.jpg';

const ErrorIndicator = () => {
  return (
    <div className="error">
      <img src={errorImg} alt="error" />
      <span>Something went wrong</span>
      <span>but we already trying to fix this...</span>
    </div>
  );
};

export default ErrorIndicator;
