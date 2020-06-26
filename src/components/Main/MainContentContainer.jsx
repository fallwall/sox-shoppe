import React from 'react';
import './MainContentContainer.css';

const MainContentContainer = (props) => {
  return (
    <div className="main-content-container">
      <div className="main-content-container-content">
        <div className="main-content-container-fixed">This is a title</div>
        <div className="main-content-container-unfixed">
          <h1>BIG TITLE</h1>
          <div>Shop the Collection</div>
        </div>
      </div>
    </div>
  )
}

export default MainContentContainer;