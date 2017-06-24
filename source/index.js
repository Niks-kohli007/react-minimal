import React from 'react';
import ReactDom from 'react-dom';
require('./assets/styles/base.scss');

const title = 'Minimal-react-setup';

ReactDom.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
