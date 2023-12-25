import { ReactNode } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Metadata } from 'next';

import './global.css';

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: 'LIVE STATS',
};
