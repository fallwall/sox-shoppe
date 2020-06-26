import React from 'react';
import './MainContentContainer.css';

const MainContentContainer = (props) => {

  const style = {
    backgroundImage: 'url(' + props.info.img + ')'
  };

  return (
    <div className="main-content-container">
      <div className="main-content-container-content" style={style}>
        <div className="main-content-container-fixed"><hr />{props.info.title}<hr /></div>
        <div className="main-content-container-unfixed">
          <h1>{props.info.title}</h1>
          <div>Shop the Collection</div>
        </div>
      </div>
    </div>
  )
}

export default MainContentContainer;