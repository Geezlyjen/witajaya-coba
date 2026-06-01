"use client";

import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Phone } from 'lucide-react';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface Product {
  name: string;
  caption: string;
  images: string[];
  material: string;
  specs: string[];
}

const products = {
  'variasi-motor': [
    {
      name: 'Footstep Custom',
      caption: 'Variasi motor dengan desain presisi dan material berkualitas.',
      hint: '(klik gambar untuk lihat detail)',
      images: ['https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZXRhbCUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzc5NzExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
      material: 'Stainless Steel / Aluminium',
      specs: ['Custom design sesuai permintaan', 'Tahan karat dan korosi', 'Finishing halus dan presisi']
    },
    {
      name: 'Knalpot Custom',
      caption: 'Pengerjaan knalpot custom dengan hasil maksimal.',
      images: ['https://images.unsplash.com/photo-1666634157070-6fd830fb5672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzc5NzExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
      material: 'Stainless / Besi',
      specs: ['Desain custom', 'Suara sesuai keinginan', 'Pemasangan presisi']
    }
  ],
  'variasi-mobil': [
    {
      name: 'Velg Racing Custom',
      caption: 'Modifikasi dan custom velg racing dengan presisi tinggi.',
      hint: '(klik gambar untuk lihat detail)',
      images: ['https://images.unsplash.com/photo-1582043568773-a7a2b57239f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZ2VhcnMlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3Nzk3MTE5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'],
      material: 'Aluminium / Custom',
      specs: ['Bubut velg presisi', 'Balancing sempurna', 'Berbagai ukuran']
    }
  ],
  'screw-feeder': [
    {
      name: 'Screw Feeder Industrial',
      caption: 'Komponen screw feeder untuk kebutuhan industri.',
      hint: '(klik gambar untuk lihat detail)',
      images: ['https://images.unsplash.com/photo-1593062037896-764e9f52029e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWNoYW5pY2FsJTIwZ2VhcnMlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3Nzk3MTE5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'],
      material: 'Stainless Steel / Besi',
      specs: ['Presisi tinggi', 'Tahan lama', 'Custom sesuai mesin']
    }
  ],
  'custom-part': [
    {
      name: 'Bearing Custom',
      caption: 'Pengerjaan bearing dan komponen custom lainnya.',
      hint: '(klik gambar untuk lihat detail)',
      images: ['https://images.unsplash.com/photo-1583198432859-635beb4e8600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZWNoYW5pY2FsJTIwZ2VhcnMlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3Nzk3MTE5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'],
      material: 'Custom sesuai kebutuhan',
      specs: ['Bubut bearing presisi', 'Berbagai ukuran', 'Toleransi ketat']
    },
    {
      name: 'Ulir/Drat Custom',
      caption: 'Pembuatan ulir dan drat dengan berbagai spesifikasi.',
      hint: '(klik gambar untuk lihat detail)',
      images: ['https://images.unsplash.com/photo-1740209475472-aa7d280f7452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzc5NzExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
      material: 'Stainless / Besi / Aluminium',
      specs: ['Ulir metrik & inci', 'Presisi tinggi', 'Custom pitch']
    }
  ]
};

export function ProductsSection() {
  const { ref, isInView } = useInView();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan ${productName}. Bisa minta informasi lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section id="produk" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Produk dan Layanan Bengkel Bubut WITA JAYA
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Berbagai pilihan layanan pengerjaan bubut presisi untuk kebutuhan Anda
          </p>

          <Accordion.Root type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            <Accordion.Item value="variasi-motor" className="bg-white rounded-lg shadow-md overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group">
                  <span className="text-xl font-semibold text-foreground">Variasi Motor</span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {products['variasi-motor'].map((product, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-slate-50 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary"
                    >
                      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.caption}</p>
                      <p className="text-xs text-primary mt-2">{product.hint}</p>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="variasi-mobil" className="bg-white rounded-lg shadow-md overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group">
                  <span className="text-xl font-semibold text-foreground">Variasi Mobil</span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {products['variasi-mobil'].map((product, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-slate-50 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary"
                    >
                      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.caption}</p>
                      <p className="text-xs text-primary mt-2">{product.hint}</p>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="screw-feeder" className="bg-white rounded-lg shadow-md overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group">
                  <span className="text-xl font-semibold text-foreground">Screw Feeder</span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {products['screw-feeder'].map((product, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-slate-50 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary"
                    >
                      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.caption}</p>
                      <p className="text-xs text-primary mt-2">{product.hint}</p>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="custom-part" className="bg-white rounded-lg shadow-md overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group">
                  <span className="text-xl font-semibold text-foreground">Custom Part</span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {products['custom-part'].map((product, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-slate-50 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary"
                    >
                      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.caption}</p>
                      <p className="text-xs text-primary mt-2">{product.hint}</p>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </motion.div>
      </div>

      {/* modal - detail product */}
      <Dialog.Root open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50 p-8">
            {selectedProduct && (
              <>
                <Dialog.Title className="text-2xl font-bold text-foreground mb-4">
                  {selectedProduct.name}
                </Dialog.Title>
                <img
                  src={selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Material:</h4>
                    <p className="text-muted-foreground">{selectedProduct.material}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Spesifikasi:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProduct.specs.map((spec, idx) => (
                        <li key={idx} className="text-muted-foreground">{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => handleWhatsApp(selectedProduct.name)}
                  className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 font-semibold text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Tanya atau Order via WhatsApp
                </button>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
