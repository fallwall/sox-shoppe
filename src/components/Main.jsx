import React from 'react';
import { Route } from 'react-router-dom';
import MainMen from '../pages/MainMen';
import MainWomen from '../pages/MainWomen';
import MainLimited from '../pages/MainLimited';
import MainKids from '../pages/MainKids';
import MainSales from '../pages/MainSales';

const Main = () => {
  return (
    <div className="main">
      never fear. Main is here.
      <Route path="/men" exact render={() => <MainMen />} />
      <Route path="/women" exact render={() => <MainWomen />} />
      <Route path="/limited" exact render={() => <MainLimited />} />
      <Route path="/kids" exact render={() => <MainKids />} />
      <Route path="/sales" exact render={() => <MainSales />} />

    </div>
  )
}

export default Main;