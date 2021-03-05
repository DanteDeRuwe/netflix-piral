import * as React from 'react';
import { Link } from 'react-router-dom';
import {MenuContainerProps} from 'piral'

const Navigation: React.FC<MenuContainerProps> = ({children}) => (
  <div id="navigation" className="Navigation">
    <nav>
      <ul>
        {children}
      </ul>
    </nav>
  </div>
);

export default Navigation;
