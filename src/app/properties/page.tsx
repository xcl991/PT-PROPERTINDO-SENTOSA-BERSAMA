'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Building2, Home, MapPin, Bed, Bath, Square, Search, Filter, Grid, List } from 'lucide-react'

export default function PropertiesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const properties = [
    {
      id: 1,
      title: "Ruang Kantor Premium",
      type: "Sewa Guna Usaha",
      location: "Pengasinan, Sawangan",
      price: "Rp 150.000.000/tahun",
      size: "200 m²",
      bedrooms: 0,
      bathrooms: 2,
      description: "Ruang kantor modern dengan fasilitas lengkap, strategis untuk bisnis Anda",
      features: ["AC Central", "Parking Area", "Security 24/7", "Meeting Room"],
      image: "/api/placeholder/400/300",
      status: "available"
    },
    {
      id: 2,
      title: "Gudang Komersial",
      type: "Sewa Guna Usaha",
      location: "Sawangan, Depok",
      price: "Rp 200.000.000/tahun",
      size: "500 m²",
      bedrooms: 0,
      bathrooms: 1,
      description: "Gudang strategis dengan akses mudah untuk distribusi barang",
      features: ["Loading Dock", "High Ceiling", "Parking Truck", "Security"],
      image: "/api/placeholder/400/300",
      status: "available"
    },
    {
      id: 3,
      title: "Ruang Usaha Retail",
      type: "Real Estat Disewa",
      location: "Pengasinan, Depok",
      price: "Rp 75.000.000/tahun",
      size: "120 m²",
      bedrooms: 0,
      bathrooms: 1,
      description: "Lokasi sempurna untuk bisnis retail dengan traffic tinggi",
      features: ["Display Window", "Parking Area", "LED Signage", "AC"],
      image: "/api/placeholder/400/300",
      status: "available"
    },
    {
      id: 4,
      title: "Kantor Executive",
      type: "Real Estat Dimiliki",
      location: "Sawangan, Depok",
      price: "Rp 2.500.000.000",
      size: "300 m²",
      bedrooms: 0,
      bathrooms: 3,
      description: "Gedung kantor eksklusif dengan desain modern dan fasilitas premium",
      features: ["Executive Lounge", "Private Parking", "Gym", "Rooftop Garden"],
      image: "/api/placeholder/400/300",
      status: "sale"
    },
    {
      id: 5,
      title: "Ruko 3 Lantai",
      type: "Real Estat Disewa",
      location: "Pengasinan, Sawangan",
      price: "Rp 180.000.000/tahun",
      size: "240 m²",
      bedrooms: 0,
      bathrooms: 3,
      description: "Ruang komersial 3 lantai ideal untuk bisnis berkembang",
      features: ["3 Floors", "Separate Entrance", "Parking", "Storage"],
      image: "/api/placeholder/400/300",
      status: "available"
    },
    {
      id: 6,
      title: "Co-working Space",
      type: "Sewa Guna Usaha",
      location: "Sawangan, Depok",
      price: "Rp 5.000.000/bulan",
      size: "50 m²",
      bedrooms: 0,
      bathrooms: 1,
      description: "Space modern untuk startup dan freelancer dengan fasilitas lengkap",
      features: ["High Speed Internet", "Meeting Room", "Pantry", "Lounge"],
      image: "/api/placeholder/400/300",
      status: "available"
    }
  ]

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || property.type.toLowerCase().includes(selectedType.toLowerCase())
    return matchesSearch && matchesType
  })

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
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Properti Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Temukan properti komersial dan residensial terbaik untuk kebutuhan bisnis dan investasi Anda
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari properti berdasarkan nama atau lokasi..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">Semua Tipe</option>
                <option value="sewa guna usaha">Sewa Guna Usaha</option>
                <option value="real estat">Real Estat</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  className={`px-4 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid/List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Menampilkan {filteredProperties.length} Properti
            </h2>
            <div className="text-sm text-gray-600">
              {selectedType !== 'all' && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {selectedType}
                </span>
              )}
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        property.status === 'available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {property.status === 'available' ? 'Tersedia' : 'Dijual'}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {property.type}
                        </span>
                        <span className="text-lg font-bold text-blue-600">
                          {property.price}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {property.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{property.size}</span>
                      </div>
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      {property.bathrooms > 0 && (
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {property.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{property.features.length - 2} lagi
                        </span>
                      )}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/3">
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                          <Building2 className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      
                      <div className="lg:w-2/3">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {property.title}
                            </h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{property.location}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                                {property.type}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                property.status === 'available' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {property.status === 'available' ? 'Tersedia' : 'Dijual'}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 mb-2">
                              {property.price}
                            </div>
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                              Lihat Detail
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {property.description}
                        </p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Square className="h-4 w-4 mr-2" />
                            <span>{property.size}</span>
                          </div>
                          {property.bedrooms > 0 && (
                            <div className="flex items-center text-gray-600">
                              <Bed className="h-4 w-4 mr-2" />
                              <span>{property.bedrooms} Kamar Tidur</span>
                            </div>
                          )}
                          {property.bathrooms > 0 && (
                            <div className="flex items-center text-gray-600">
                              <Bath className="h-4 w-4 mr-2" />
                              <span>{property.bathrooms} Kamar Mandi</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {property.features.map((feature, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Tidak ada properti yang ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau filter yang digunakan
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tidak menemukan yang Anda cari?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan temukan properti yang sesuai dengan kebutuhan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Hubungi Konsultan
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Jadwalkan Kunjungan
            </Button>
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