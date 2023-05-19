"use client";

import "./globals.css";
import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>arianfitness</title>
      </head>
      <body className="w-full h-full">
        <main className="bg-gray-100 min-h-screen w-screen">
          <div className="max-w-screen-2xl m-auto bg-white">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
