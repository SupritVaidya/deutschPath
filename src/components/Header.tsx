import React, { useState, useRef, useEffect } from 'react';
import { User } from '../../types';
import { BookOpenIcon, LogOutIcon, UserIcon } from './icons';

interface HeaderProps {
  user: User | null;
  onLogout?: () => void;
  onEditProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout, onEditProfile }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpenIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">
            Deutsch<span className="text-primary">Path</span>
          </h1>
        </div>
        {user && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className="flex items-center gap-3 p-1 rounded-full hover:bg-base-200 transition-colors"
              aria-label="User menu"
            >
              <span className="hidden sm:inline text-text-secondary font-medium">{user.name}</span>
              <img
                src={user.avatarUrl}
                alt="User avatar"
                className="h-10 w-10 rounded-full border-2 border-primary"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-base-100 rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                <button
                  onClick={() => {
                    onEditProfile?.();
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-base-200 flex items-center gap-3"
                >
                  <UserIcon className="h-5 w-5 text-text-secondary" />
                  Edit Profile
                </button>
                <button
                  onClick={() => {
                    onLogout?.();
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-base-200 flex items-center gap-3"
                >
                  <LogOutIcon className="h-5 w-5 text-text-secondary" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
