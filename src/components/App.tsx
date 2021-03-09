import * as React from 'react';
import { ExtensionSlot, LayoutProps, Menu } from 'piral';
import Logo from './Logo';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App: React.FC<LayoutProps> = ({ children }) => (
  <Router>
    <header className="Header">
      <Logo />
      <Menu type="general" />
      <ExtensionSlot name="search"></ExtensionSlot>
    </header>
    <Route exact path="/">
      <Redirect to="/browse"></Redirect>
    </Route>
    {children}
  </Router>
);

export default App;
