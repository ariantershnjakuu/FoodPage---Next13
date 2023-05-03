"use client";

import "./globals.css";
import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <body>
      <Navbar />
      {children}
    </body>
  );
};

export default Layout;
