import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  const onBack = () => {
    history.push('/');
  };

  return (
    <button className=' ui blue button ' onClick={onBack}>
      <i className='left chevron icon'></i>
      Back main page
    </button>
  );
};

export default BackButton;
