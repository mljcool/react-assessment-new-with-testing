import React from 'react';
import Routes from 'routes/Routes';
import ProjectTitle from './ProjectTitle';

const MainLayout = () => {
  return (
    <div className='ui container app'>
      <ProjectTitle />
      <div className='ui raised  padded  container segment'>
        <Routes></Routes>
      </div>
    </div>
  );
};

export default MainLayout;
