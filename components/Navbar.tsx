'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Image from 'next/image';
import { BR, ES, US } from 'country-flag-icons/react/3x2';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: US,
  },
  {
    code: 'pt',
    name: 'Portuguese',
    flag: BR,
  },
  {
    code: 'es',
    name: 'Spanish',
    flag: ES,
  },
];

export function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-muted rounded animate-pulse'></div>
            </div>
            <div className='flex items-center'>
              <div className='w-20 h-8 bg-muted rounded animate-pulse'></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/logo.png'
              alt='ES Logo'
              width={40}
              height={40}
              className='w-10 h-10 object-contain'
              priority
            />
          </div>

          {/* Right side - Language selector */}
          <div className='flex items-center'>
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='flex items-center gap-2'
                >
                  {selectedLanguage && (
                    <>
                      <selectedLanguage.flag className='w-4 h-3' />
                      <span className='text-sm'>{selectedLanguage.name}</span>
                    </>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-48'>
                {languages.map(language => {
                  const FlagComponent = language.flag;
                  return (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => setSelectedLanguage(language)}
                      className='flex items-center gap-3 cursor-pointer'
                    >
                      <FlagComponent className='w-5 h-4' />
                      <span>{language.name}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
