import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LiveChat from './LiveChat';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Layout;
