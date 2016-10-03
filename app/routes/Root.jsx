import './Root.scss';

import * as React from 'react';

import Header from '../components/Header';

const Root = props => {
  return (
    <div className="Root">
      <div className="Root-header">
        <Header />
      </div>
      <div className="Root-content">
        <div className="Root-child">
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Root;
