"use client";

import { motion } from 'motion/react';
import { CheckCircle2, Phone, ArrowRight, Award, Truck, Zap } from 'lucide-react';

export function HeroSection() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6281232377216', '_blank');
  };

  const scrollToProducts = () => {
    document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* visual kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Bengkel Bubut Surabaya – Jasa Bubut, Drat, dan Custom Part Berkualitas
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              WITA JAYA melayani berbagai kebutuhan pengerjaan bubut dan manufaktur seperti bubut ulir (drat), bubut silinder, bearing, custom part, variasi kendaraan, serta berbagai kebutuhan teknik lainnya dengan pengerjaan presisi dan kualitas terbaik. Melayani Surabaya dan pengiriman ke seluruh Indonesia.
            </p>

            {/* keunggulan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Pengerjaan presisi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Bisa custom sesuai kebutuhan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Melayani berbagai jenis part</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Pengiriman luar kota</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Konsultasi mudah</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl flex items-center gap-2 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Konsultasi WhatsApp
              </button>
              <button
                onClick={scrollToProducts}
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Lihat Produk
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* visual kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/thumbnail.webp"
                alt="Bengkel Bubut WITA JAYA Surabaya - Jasa Bubut Presisi, Drat, Bearing, Custom Part"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* statistics cards */}
            <div className="absolute -bottom-8 left-4 right-4 grid grid-cols-3 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg p-4 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="font-bold text-xl text-foreground">100+</div>
                <div className="text-xs text-muted-foreground">Produk Dikerjakan</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-lg p-4 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div className="font-bold text-sm text-foreground">Pengiriman</div>
                <div className="text-xs text-muted-foreground">Seluruh Indonesia</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-lg p-4 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="font-bold text-sm text-foreground">Fast</div>
                <div className="text-xs text-muted-foreground">Response</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
