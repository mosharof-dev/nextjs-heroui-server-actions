import { ThemeSwitch } from '@/Theme/ThemeSwitch';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
        
          <div className="flex items-center gap-3">
            
            <p className="font-bold">ACME</p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/task" className="font-medium text-accent" aria-current="page">
              Books
            </Link>
          </li>
         
        </ul>
        <div>
              <ThemeSwitch/>
        </div>
      </header>
      
    </nav>
        
    );
};

export default NavBar;