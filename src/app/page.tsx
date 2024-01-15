'use client';

import Banner from './banner';
import Chevron from './chevron';
import Contact from './contact';
import { SidebarContext } from './contexts/sideBarContext';
import Experiences from './experiences';
import Footer from './footer';
import Header from './header';
import Internships from './internships';
import Line from './line';
import Projects from './projects';
import SideBar from './sideBar';
import Stack from './stack';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
        <main className="px-4 md:px-20 lg:px-28 xl:px-32">
          <Header />
          <Banner />
          <Chevron />
          <Internships />
          <Line />
          <Projects />
          <Experiences />
          <Stack />
          <Contact />
          <Footer />
        </main>
        {isOpen && <SideBar />}
      </SidebarContext.Provider>
    </div>
  );
}
