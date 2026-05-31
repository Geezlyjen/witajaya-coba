"use client";

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';
import { ArrowLeft, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Cara Memilih Material Bubut yang Tepat',
    excerpt: 'Panduan lengkap memilih material yang sesuai untuk kebutuhan bubut Anda. Ketahui karakteristik setiap material untuk hasil optimal.',
    image: 'https://images.unsplash.com/photo-1740209475472-aa7d280f7452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzc5NzExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'WITA JAYA',
    // date: '20 Mei 2026',
    // readTime: '5 min'
  },
  {
    id: 2,
    title: 'Fungsi Bearing pada Mesin',
    excerpt: 'Memahami peran penting bearing dalam sistem mekanik dan cara memilih bearing yang tepat untuk aplikasi Anda.',
    image: 'https://images.unsplash.com/photo-1583198432859-635beb4e8600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZWNoYW5pY2FsJTIwZ2VhcnMlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3Nzk3MTE5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'WITA JAYA',
    // date: '18 Mei 2026',
    // readTime: '4 min'
  },
  {
    id: 3,
    title: 'Perbedaan Bubut Ulir dan Bubut Silinder',
    excerpt: 'Kenali perbedaan teknik bubut ulir dan silinder, serta aplikasi terbaik untuk masing-masing metode.',
    image: 'https://images.unsplash.com/photo-1713371398485-7bde1bde9def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtZXRhbCUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzc5NzExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'WITA JAYA',
    // date: '15 Mei 2026',
    // readTime: '6 min'
  },
  {
    id: 4,
    title: 'Tips Merawat Part Kendaraan',
    excerpt: 'Panduan praktis merawat komponen kendaraan agar tetap awet dan performa optimal. Hemat biaya dengan perawatan yang tepat.',
    image: 'https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZXRhbCUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzc5NzExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'WITA JAYA',
    // date: '12 Mei 2026',
    // readTime: '5 min'
  },
  {
    id: 5,
    title: 'Keunggulan Custom Part untuk Industri',
    excerpt: 'Mengapa custom part menjadi pilihan terbaik untuk kebutuhan industri Anda. Fleksibilitas dan presisi dalam satu solusi.',
    image: 'https://images.unsplash.com/photo-1593062037896-764e9f52029e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWNoYW5pY2FsJTIwZ2VhcnMlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3Nzk3MTE5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'WITA JAYA',
    // date: '10 Mei 2026',
    // readTime: '7 min'
  },
  {
    id: 6,
    title: 'Proses Bubut Presisi: Standar Industri',
    excerpt: 'Mengenal standar industri dalam proses bubut presisi dan bagaimana WITA JAYA menerapkannya untuk hasil terbaik.',
    image: 'https://images.unsplash.com/photo-1666634157070-6fd830fb5672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHdvcmtzaG9wJTIwcHJlY2lzaW9uJTIwcGFydHN8ZW58MXx8fHwxNzc5NzExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'WITA JAYA',
    // date: '8 Mei 2026',
    // readTime: '6 min'
  }
];

export function ArticlePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-16 bg-linear-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Beranda
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Artikel dan Tips Dunia Bengkel Bubut
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Pelajari lebih dalam tentang dunia manufaktur, tips perawatan, dan panduan praktis dari WITA JAYA
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div> */}
                  </div>
                  {/* <div className="text-sm text-muted-foreground mb-4">
                    {article.date}
                  </div> */}
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-all">
                    Baca Artikel
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
