"use client";

import { Phone, Music } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-lg">
                WJ
              </div>
              <div>
                <div className="font-bold text-xl">WITA JAYA</div>
                <div className="text-sm text-white/80">Bengkel Bubut Presisi</div>
              </div>
            </div>
            <p className="text-white/80">
              Bengkel Bubut Presisi Surabaya - Melayani berbagai kebutuhan manufaktur dan teknik dengan hasil terbaik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('beranda')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('produk')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Produk
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <a
                href="/artikel"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Artikel
              </a>
              <button
                onClick={() => scrollToSection('kontak')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Kontak
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/witajaya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                {/* <Instagram className="w-5 h-5" /> */}
                Instagram
              </a>
              <a
                href="https://tiktok.com/@witajaya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Music className="w-5 h-5" />
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/80">
          <p>&copy; 2026 WITA JAYA. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
