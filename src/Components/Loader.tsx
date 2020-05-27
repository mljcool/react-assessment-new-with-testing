import React, { Fragment } from 'react';

const myLoader: JSX.Element = (
  <div className='ui active inverted dimmer'>
    <div className='ui text loader'>Loading</div>
  </div>
);

const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return <Fragment> {isLoading && myLoader}</Fragment>;
};

export default Loader;
