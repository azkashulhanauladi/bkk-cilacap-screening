import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Katalog Layanan', path: '/layanan' },
    { name: 'Skrining Mandiri', path: '/skrining' },
    { name: 'Riwayat & Hasil', path: '/riwayat' },
    { name: 'Pusat Bantuan', path: '/kontak' },
  ];

  return (
    <header className="bg-bkk-blue text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3" aria-label="Beranda BKK Cilacap">
            <div className="p-2 bg-bkk-teal rounded-lg text-white">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-wide block leading-tight">BKK CLASS I CILACAP</span>
              <span className="text-xs text-bkk-accent block">Sistem Skrining TB & HIV Terintegrasi</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi Utama">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-bkk-accent ${
                    isActive ? 'text-bkk-accent font-semibold underline underline-offset-8 decoration-2' : 'text-slate-100'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-bkk-teal focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Buka Menu Navigasi"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-bkk-blue border-t border-bkk-teal/30 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-bkk-teal text-white' : 'text-slate-200 hover:bg-bkk-teal/50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}