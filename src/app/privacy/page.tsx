'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kebijakan privasi PT PROPERTINDO SENTOSA BERSAMA dalam melindungi data pribadi Anda
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  <strong>Terakhir diperbarui:</strong> 22 April 2024
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  PT PROPERTINDO SENTOSA BERSAMA ("Kami") sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                  Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Database className="h-6 w-6 text-blue-600 mr-2" />
                    1. Informasi yang Kami Kumpulkan
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Kami dapat mengumpulkan jenis informasi berikut:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat lengkap</li>
                      <li><strong>Informasi Perusahaan:</strong> Nama perusahaan, jabatan, bidang usaha</li>
                      <li><strong>Informasi Properti:</strong> Lokasi properti, jenis properti, preferensi investasi</li>
                      <li><strong>Informasi Penggunaan:</strong> Data penggunaan website, cookies, alamat IP</li>
                      <li><strong>Informasi Komunikasi:</strong> Riwayat komunikasi dengan Kami</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-blue-600 mr-2" />
                    2. Cara Kami Menggunakan Informasi Anda
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Kami menggunakan informasi Anda untuk:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Menyediakan layanan properti dan konsultasi</li>
                      <li>Memproses permintaan sewa guna usaha properti</li>
                      <li>Mengelola properti yang dimiliki atau disewa</li>
                      <li>Mengirimkan informasi tentang properti yang tersedia</li>
                      <li>Memberikan layanan pelanggan dan dukungan</li>
                      <li>Mematuhi kewajiban hukum dan regulasi</li>
                      <li>Meningkatkan kualitas layanan Kami</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    3. Perlindungan Data
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Kami melindungi data pribadi Anda dengan:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Enkripsi data selama transmisi dan penyimpanan</li>
                      <li>Akses terbatas kepada personil yang berwenang</li>
                      <li>Sistem keamanan yang terus diperbarui</li>
                      <li>Backup data secara teratur</li>
                      <li>Audit keamanan berkala</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Berbagi Informasi</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Dengan persetujuan Anda yang jelas</li>
                      <li>Untuk memenuhi kewajiban hukum</li>
                      <li>Dengan mitra bisnis tepercaya untuk penyediaan layanan</li>
                      <li>Dalam kasus transfer bisnis (merger, akuisisi)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hak Anda</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Sebagai pemilik data, Anda memiliki hak untuk:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Mengakses data pribadi yang Kami simpan</li>
                      <li>Memperbaiki data yang tidak akurat</li>
                      <li>Menghapus data pribadi Anda</li>
                      <li>Membatasi pemrosesan data Anda</li>
                      <li>Menarik persetujuan yang telah diberikan</li>
                      <li>Memindahkan data Anda ke layanan lain</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Website Kami menggunakan cookies untuk:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Mengingat preferensi Anda</li>
                      <li>Menganalisis penggunaan website</li>
                      <li>Menyediakan konten yang relevan</li>
                      <li>Meningkatkan pengalaman pengguna</li>
                    </ul>
                    <p>Anda dapat mengatur cookie melalui pengaturan browser Anda.</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Penyimpanan Data</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Data pribadi Anda akan disimpan selama:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Diperlukan untuk penyediaan layanan</li>
                      <li>Memenuhi kewajiban hukum dan perpajakan</li>
                      <li>Menyelesaikan perselisihan</li>
                      <li>Melaksanakan perjanjian dengan Anda</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Perubahan Kebijakan</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website 
                      atau email Anda. Penggunaan terus-menerus layanan Kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontak Kami</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, hubungi:</p>
                    <div className="bg-blue-50 rounded-lg p-6 mt-4">
                      <p><strong>PT PROPERTINDO SENTOSA BERSAMA</strong></p>
                      <p>Email: eko04150@gmail.com</p>
                      <p>Telepon: 082382466325</p>
                      <p>Alamat: Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok, Jawa Barat 16518</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Legal Compliance</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Kebijakan Privasi ini dibuat sesuai dengan:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi</li>
                      <li>Peraturan Pemerintah terkait perlindungan data</li>
                      <li>Standar industri perlindungan data internasional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
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