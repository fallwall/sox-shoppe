import React from 'react';
import MainContentContainer from '../components/Main/MainContentContainer';
import data from '../data/mainHome.json';

const MainHome = () => {
  return (
    <div className="main-home">
      {data.data.map(e => <MainContentContainer info={e}/>)}
    </div>
  )
}

export default MainHome;