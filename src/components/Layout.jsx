import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LiveChat from './LiveChat';
import PageTransition from './PageTransition';
import ScrollProgress from './ScrollProgress';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollProgress />
      <NavBar />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Layout;
