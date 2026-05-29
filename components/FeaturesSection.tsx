"use client";

import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import { Target, Wrench, Truck, MessageCircle, DollarSign, Cog } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Presisi Tinggi',
    description: 'Pengerjaan detail dengan hasil rapi dan akurat'
  },
  {
    icon: Wrench,
    title: 'Custom Sesuai Kebutuhan',
    description: 'Menerima berbagai permintaan custom'
  },
  {
    icon: Truck,
    title: 'Pengiriman Seluruh Indonesia',
    description: 'Melayani luar kota'
  },
  {
    icon: MessageCircle,
    title: 'Respon Cepat',
    description: 'Mudah konsultasi melalui WhatsApp'
  },
  {
    icon: DollarSign,
    title: 'Harga Kompetitif',
    description: 'Harga sesuai kualitas pengerjaan'
  },
  {
    icon: Cog,
    title: 'Pengalaman Profesional',
    description: 'Tim ahli dengan pengalaman bertahun-tahun'
  }
];

export function FeaturesSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kenapa Memilih WITA JAYA?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami adalah memberikan layanan terbaik dengan hasil yang memuaskan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
