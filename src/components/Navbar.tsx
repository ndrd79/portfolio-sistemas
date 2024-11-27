'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                TechSolutions
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/')
                    ? 'border-primary-500 text-primary-900'
                    : 'border-transparent text-secondary-500 hover:border-secondary-300 hover:text-secondary-700'
                }`}
              >
                Início
              </Link>
              <Link
                href="/sistemas"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/sistemas')
                    ? 'border-primary-500 text-primary-900'
                    : 'border-transparent text-secondary-500 hover:border-secondary-300 hover:text-secondary-700'
                }`}
              >
                Sistemas
              </Link>
              <Link
                href="/sobre"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/sobre')
                    ? 'border-primary-500 text-primary-900'
                    : 'border-transparent text-secondary-500 hover:border-secondary-300 hover:text-secondary-700'
                }`}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/contato')
                    ? 'border-primary-500 text-primary-900'
                    : 'border-transparent text-secondary-500 hover:border-secondary-300 hover:text-secondary-700'
                }`}
              >
                Contato
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t border-secondary-200`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/')
                ? 'bg-primary-50 border-primary-500 text-primary-700'
                : 'border-transparent text-secondary-500 hover:bg-secondary-50 hover:border-secondary-300 hover:text-secondary-700'
            }`}
          >
            Início
          </Link>
          <Link
            href="/sistemas"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/sistemas')
                ? 'bg-primary-50 border-primary-500 text-primary-700'
                : 'border-transparent text-secondary-500 hover:bg-secondary-50 hover:border-secondary-300 hover:text-secondary-700'
            }`}
          >
            Sistemas
          </Link>
          <Link
            href="/sobre"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/sobre')
                ? 'bg-primary-50 border-primary-500 text-primary-700'
                : 'border-transparent text-secondary-500 hover:bg-secondary-50 hover:border-secondary-300 hover:text-secondary-700'
            }`}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/contato')
                ? 'bg-primary-50 border-primary-500 text-primary-700'
                : 'border-transparent text-secondary-500 hover:bg-secondary-50 hover:border-secondary-300 hover:text-secondary-700'
            }`}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
