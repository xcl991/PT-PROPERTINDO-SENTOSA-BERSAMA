'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Building2, Home, TrendingUp, Shield, ArrowRight, Menu, X } from 'lucide-react'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: Building2,
      title: "Sewa Guna Usaha Properti",
      description: "Solusi leasing properti tanpa hak opsi intelektual properti untuk kebutuhan bisnis Anda",
      features: ["Fleksibel", "Biaya kompetitif", "Proses cepat"]
    },
    {
      icon: Home,
      title: "Real Estat Dimiliki & Disewa",
      description: "Manajemen properti komersial dan residensial dengan layanan terintegrasi",
      features: ["Investasi aman", "Return optimal", "Profesional management"]
    },
    {
      icon: TrendingUp,
      title: "Konsultasi Properti",
      description: "Analisis pasar dan strategi investasi properti yang komprehensif",
      features: ["Market analysis", "Risk assessment", "Growth strategy"]
    },
    {
      icon: Shield,
      title: "Legal & Compliance",
      description: "Pendampingan lengkap untuk perizinan dan kepatuhan regulasi properti",
      features: ["NIB terdaftar", "Legal compliance", "Document management"]
    }
  ]

  const stats = [
    { number: "2+", label: "Tahun Pengalaman" },
    { number: "100%", label: "Kepuasan Klien" },
    { number: "2", label: "Layanan Utama" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                PT PROPERTINDO SENTOSA BERSAMA
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="/properties" className="text-gray-700 hover:text-blue-600 transition-colors">Properti</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Konsultasi Gratis
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="/properties" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Properti</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    PT PROPERTINDO
                  </span>
                  <br />
                  <span className="text-gray-900">SENTOSA BERSAMA</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Partner terpercaya untuk solusi properti komersial dan residensial di Indonesia. 
                  Berpengalaman dalam sewa guna usaha dan manajemen real estat.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3">
                  Jelajahi Properti
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>NIB Terdaftar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <span>Legal Compliance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Perusahaan Terpercaya</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">NIB</span>
                      <span className="font-semibold">2204240226879</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className="font-semibold text-green-600">Usaha Mikro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Penanaman Modal</span>
                      <span className="font-semibold">PMDN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lokasi</span>
                      <span className="font-semibold">Depok, Jawa Barat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi properti komprehensif untuk kebutuhan bisnis dan investasi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">PT PROPERTINDO SENTOSA BERSAMA</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                PT PROPERTINDO SENTOSA BERSAMA adalah perusahaan yang bergerak di bidang real estat dan sewa guna usaha properti. 
                Dengan NIB 2204240226879, kami telah terdaftar secara resmi dan beroperasi sebagai Usaha Mikro dengan penanaman modal PMDN.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Kantor kami berlokasi di Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok, Jawa Barat. 
                Kami berkomitmen untuk memberikan solusi properti terbaik bagi klien kami dengan profesionalisme dan integritas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-semibold">Legal Terdaftar</div>
                    <div className="text-sm text-gray-600">NIB: 2204240226879</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold">Tersertifikasi</div>
                    <div className="text-sm text-gray-600">BSrE-BSSN</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informasi Perusahaan</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-blue-100">Nama Perusahaan</label>
                  <div className="font-semibold">PT PROPERTINDO SENTOSA BERSAMA</div>
                </div>
                <div>
                  <label className="text-blue-100">Alamat</label>
                  <div className="font-semibold">Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok</div>
                </div>
                <div>
                  <label className="text-blue-100">Kode Pos</label>
                  <div className="font-semibold">16518</div>
                </div>
                <div>
                  <label className="text-blue-100">Provinsi</label>
                  <div className="font-semibold">Jawa Barat</div>
                </div>
                <div>
                  <label className="text-blue-100">Status Penanaman Modal</label>
                  <div className="font-semibold">PMDN</div>
                </div>
                <div>
                  <label className="text-blue-100">Skala Usaha</label>
                  <div className="font-semibold">Usaha Mikro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Siap membantu kebutuhan properti Anda</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                <p className="text-gray-600">082382466325</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">eko04150@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                <p className="text-gray-600">Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok</p>
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
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/properties" className="hover:text-white transition-colors">Properti</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
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