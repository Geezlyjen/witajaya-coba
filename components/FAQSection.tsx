"use client";

import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Bisa kirim ke luar kota?',
    answer: 'Ya, WITA JAYA melayani pengiriman ke seluruh Indonesia.'
  },
  {
    question: 'Apakah menerima custom?',
    answer: 'Kami menerima berbagai kebutuhan custom part sesuai kebutuhan Anda. Silakan konsultasikan detail kebutuhan Anda melalui WhatsApp.'
  },
  {
    question: 'Berapa lama proses pengerjaan?',
    answer: 'Waktu pengerjaan menyesuaikan tingkat kesulitan dan jumlah pesanan. Untuk informasi lebih detail, silakan hubungi kami.'
  },
  {
    question: 'Bagaimana cara order?',
    answer: 'Hubungi WhatsApp kami untuk konsultasi dan pemesanan. Tim kami siap membantu Anda.'
  },
  {
    question: 'Material apa saja yang bisa dikerjakan?',
    answer: 'Kami dapat mengerjakan berbagai material seperti Stainless Steel, Aluminium, Besi, dan material lainnya sesuai kebutuhan.'
  },
  {
    question: 'Apakah ada garansi untuk produk?',
    answer: 'Ya, kami memberikan garansi untuk hasil pengerjaan kami. Detail garansi dapat dikonsultasikan saat pemesanan.'
  }
];

export function FAQSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar layanan kami
          </p>

          <Accordion.Root type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Accordion.Item
                key={idx}
                value={`faq-${idx}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group">
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
