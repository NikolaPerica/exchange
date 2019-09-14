import React from 'react';
import ReactDOM from 'react-dom';
import Nasl from './Nasl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nasl />, div);
  ReactDOM.unmountComponentAtNode(div);
});
