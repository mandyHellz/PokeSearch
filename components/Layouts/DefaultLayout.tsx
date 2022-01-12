import React from 'react';
import Footer from './Footer';
import Header from './Header'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
