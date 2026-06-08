"use client";

import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="/about.webp"
              alt="WITA JAYA Workshop"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tentang WITA JAYA
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WITA JAYA merupakan bengkel bubut di Surabaya yang melayani pengerjaan berbagai kebutuhan manufaktur dan teknik dengan hasil presisi tinggi. Kami melayani pengerjaan part custom, variasi kendaraan, bearing, ulir/drat, hingga kebutuhan industri lainnya.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan pengalaman dan dedikasi tinggi, kami berkomitmen memberikan hasil terbaik untuk setiap proyek yang kami kerjakan. Tim profesional kami siap membantu mewujudkan kebutuhan manufaktur Anda dengan presisi dan kualitas yang terjamin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
