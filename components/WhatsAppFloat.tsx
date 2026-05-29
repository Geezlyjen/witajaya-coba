"use client";

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20WITA%20JAYA,%20saya%20ingin%20konsultasi', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.button>
  );
}
