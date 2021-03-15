import * as React from 'react';
import { ExtensionSlot, LayoutProps, Menu } from 'piral';
import Logo from './Logo';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';

const App: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div className="main-wrapper">
      <Router>
        <header className="Header">
          <Logo />
          <Menu type="general" />
          <ExtensionSlot name="header-items" />
        </header>
        <Route exact path="/">
          <Redirect to="/browse" />
        </Route>
        {children}
      </Router>
    </div>
    <Footer />
  </>
);

export default App;
