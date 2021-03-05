import * as React from 'react';
import { ComponentsState, ErrorComponentsState, LayoutProps } from 'piral';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const apiKey = '87dfa1c669eea853da609d4968d294be';

const App: React.FC<LayoutProps> = ({ children }) => (
  <Router>
    <header className="Header">
      <Logo />
      <Navigation />
    </header>
    {children}
  </Router>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
      <p>
        Go back <Link to="/">to the homepage</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = { 
  Layout: App, 
  MenuContainer: Navigation, 
  MenuItem: ({children})=><li>{children}</li> 
};
