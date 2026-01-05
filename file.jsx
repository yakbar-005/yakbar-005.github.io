import React from 'react';
import { ShoppingCart, Truck, Award, Clock, Phone, MapPin, Star } from 'lucide-react';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Dada Ayam Potong',
      price: 'Rp 45.000',
      weight: '500gr',
      image: 'https://placehold.co/300x200/ff6b6b/ffffff?text=Dada+Ayam',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Paha Ayam Utuh',
      price: 'Rp 38.000',
      weight: '500gr',
      image: 'https://placehold.co/300x200/4ecdc4/ffffff?text=Paha+Ayam',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Sayap Ayam',
      price: 'Rp 32.000',
      weight: '500gr',
      image: 'https://placehold.co/300x200/45b7d1/ffffff?text=Sayap+Ayam',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Ayam Kampung Potong',
      price: 'Rp 65.000',
      weight: '500gr',
      image: 'https://placehold.co/300x200/f9ca24/ffffff?text=Ayam+Kampung',
      rating: 4.9
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Pengiriman Cepat',
      description: 'Gratis ongkir untuk pesanan di atas Rp 200.000'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Kualitas Terjamin',
      description: 'Ayam segar dipotong hari ini, tanpa bahan pengawet'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Pemesanan 24/7',
      description: 'Pesan kapan saja, kami siap melayani Anda'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      rating: 5,
      comment: 'Daging ayamnya sangat segar dan empuk. Sudah langganan sejak 6 bulan lalu!',
      avatar: 'https://placehold.co/60x60/ff6b6b/ffffff?text=BS'
    },
    {
      name: 'Siti Rahayu',
      rating: 5,
      comment: 'Pengiriman cepat dan packaging rapi. Ayamnya benar-benar fresh!',
      avatar: 'https://placehold.co/60x60/4ecdc4/ffffff?text=SR'
    },
    {
      name: 'Ahmad Fauzi',
      rating: 4,
      comment: 'Harga terjangkau dengan kualitas premium. Recomended banget!',
      avatar: 'https://placehold.co/60x60/45b7d1/ffffff?text=AF'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Ayam Segar</h1>
                <p className="text-sm text-gray-600">Toko Daging Ayam Premium</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-red-600 font-medium">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium">Kontak</a>
            </nav>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Daging Ayam <span className="text-yellow-300">Paling Segar</span> di Kota Anda
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                100% ayam segar, dipotong hari ini, dikirim ke rumah Anda dalam waktu 2 jam!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-yellow-400 text-red-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
                  Beli Sekarang
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-colors">
                  Lihat Produk
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://placehold.co/500x400/ffffff/ff6b6b?text=Ayam+Segar" 
                  alt="Ayam Segar" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-red-600 px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold">4.9/5</span>
                    <span className="text-gray-600">(1.200+ ulasan)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan kualitas terbaik dan pelayanan yang memuaskan untuk setiap pelanggan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Produk Unggulan</h2>
            <p className="text-gray-600">Daging ayam segar berkualitas premium, siap masak!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="text-sm font-bold ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.weight}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Tambah
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ulasan Pelanggan</h2>
            <p className="text-gray-600">Apa yang pelanggan kami katakan tentang kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-red-100 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin memesan dalam jumlah besar? Hubungi kami sekarang!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-700 rounded-xl">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telepon</h3>
              <p className="text-red-100">+62 812-3456-7890</p>
            </div>
            <div className="text-center p-6 bg-red-700 rounded-xl">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Alamat</h3>
              <p className="text-red-100">Jl. Raya Pasar No. 25, Kota Jakarta</p>
            </div>
            <div className="text-center p-6 bg-red-700 rounded-xl">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
              <p className="text-red-100">Senin - Minggu: 06.00 - 20.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Ayam Segar</h3>
          </div>
          <p className="text-gray-400 mb-4">Toko daging ayam premium dengan kualitas terbaik</p>
          <p className="text-gray-500 text-sm">© 2026 Ayam Segar. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
