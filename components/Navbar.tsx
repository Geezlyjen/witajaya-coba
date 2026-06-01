"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/6281232377216', 'halo, saya tertarik dengan layanan WITA JAYA, dan ingin bertanya mengenai ...', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/logo-wj.png"
                alt="Logo WITA JAYA"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-lg text-primary">WITA JAYA</div>
              <div className="text-xs text-muted-foreground">Bengkel Bubut Presisi</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('beranda')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('produk')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <Link href="/artikel">
              Artikel
            </Link>
            <button
              onClick={() => scrollToSection('kontak')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kontak
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Konsultasi Sekarang
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('beranda')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('produk')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              FAQ
            </button>
            <a
              href="/artikel"
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Artikel
            </a>
            <button
              onClick={() => scrollToSection('kontak')}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Kontak
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Konsultasi Sekarang
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
