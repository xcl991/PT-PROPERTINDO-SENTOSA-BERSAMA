'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, Building2, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      value: "082382466325",
      description: "Senin - Jumat, 08:00 - 17:00 WIB"
    },
    {
      icon: Mail,
      title: "Email",
      value: "eko04150@gmail.com",
      description: "Respon dalam 24 jam"
    },
    {
      icon: MapPin,
      title: "Alamat Kantor",
      value: "Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok",
      description: "Jawa Barat 16518"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Jumat: 08:00 - 17:00",
      description: "Sabtu: 09:00 - 13:00"
    }
  ]

  const services = [
    "Sewa Guna Usaha Properti",
    "Real Estat Dimiliki & Disewa",
    "Konsultasi Properti",
    "Legal & Compliance",
    "Manajemen Properti",
    "Investasi Properti"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                PT PROPERTINDO SENTOSA BERSAMA
              </span>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kami siap membantu kebutuhan properti Anda. Jangan ragu untuk menghubungi kami untuk konsultasi gratis.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-500 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telepon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="08123456789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subjek *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Pilih Subjek</option>
                          <option value="konsultasi">Konsultasi Properti</option>
                          <option value="sewa">Sewa Guna Usaha</option>
                          <option value="beli">Pembelian Properti</option>
                          <option value="kerjasama">Kerjasama Bisnis</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Jelaskan kebutuhan properti Anda..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Kirim Pesan
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Info */}
            <div className="space-y-8">
              {/* Company Info Card */}
              <Card className="border-0 bg-white shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Perusahaan</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        PT PROPERTINDO SENTOSA BERSAMA
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Perusahaan yang bergerak di bidang real estat dan sewa guna usaha properti dengan 
                        komitmen untuk memberikan solusi terbaik bagi klien.
                      </p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Legalitas Perusahaan</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>NIB:</strong> 2204240226879</li>
                        <li><strong>Status:</strong> Usaha Mikro</li>
                        <li><strong>Penanaman Modal:</strong> PMDN</li>
                        <li><strong>KBLI:</strong> 77400, 68111</li>
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Layanan Kami</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Butuh Bantuan Segera?</h3>
                  <p className="text-blue-100 mb-6">
                    Tim kami siap membantu Anda 24/7 untuk kebutuhan properti mendesak.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                      <Phone className="mr-2 h-5 w-5" />
                      082382466325
                    </Button>
                    <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600">
                      <Mail className="mr-2 h-5 w-5" />
                      eko04150@gmail.com
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map Placeholder */}
              <Card className="border-0 bg-white shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Lokasi Kami</h3>
                      <p className="text-blue-100">
                        Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Petunjuk Arah</h4>
                    <p className="text-gray-600 text-sm">
                      Kantor kami terletak di kawasan strategis Sawangan, Depok. 
                      Mudah diakses dari tol Cijago dan dekat dengan fasilitas umum.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-600">Temukan jawaban untuk pertanyaan umum tentang layanan kami</p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Apa saja syarat untuk sewa guna usaha properti?
                </h3>
                <p className="text-gray-600">
                  Syarat utama meliputi: identitas diri (KTP/Paspor), NPWP, surat izin usaha, 
                  rekomendasi bank, dan proposal bisnis. Proses verifikasi biasanya memakan waktu 3-5 hari kerja.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Berapa lama proses approval untuk aplikasi properti?
                </h3>
                <p className="text-gray-600">
                  Proses approval standar memakan waktu 7-14 hari kerja, tergantung pada kelengkapan dokumen 
                  dan jenis properti yang diajukan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Apakah tersedia opsi pembiayaan?
                </h3>
                <p className="text-gray-600">
                  Ya, kami bekerja sama dengan beberapa lembaga keuangan untuk menyediakan opsi pembiayaan 
                  dengan bunga kompetitif dan proses yang mudah.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Bagaimana sistem pembayaran yang tersedia?
                </h3>
                <p className="text-gray-600">
                  Kami menerima pembayaran melalui transfer bank, kartu kredit, dan cicilan bulanan. 
                  Pembayaran dapat dilakukan secara online melalui portal kami.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-lg">PT PROPERTINDO SENTOSA BERSAMA</span>
              </div>
              <p className="text-gray-400">Partner terpercaya untuk solusi properti di Indonesia</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sewa Guna Usaha Properti</li>
                <li>Real Estat Dimiliki & Disewa</li>
                <li>Konsultasi Properti</li>
                <li>Legal & Compliance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/properties" className="hover:text-white transition-colors">Properti</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>082382466325</li>
                <li>eko04150@gmail.com</li>
                <li>Depok, Jawa Barat</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT PROPERTINDO SENTOSA BERSAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}