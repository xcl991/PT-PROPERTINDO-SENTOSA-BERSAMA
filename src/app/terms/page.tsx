'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react'

export default function TermsAndConditions() {
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
              <FileText className="h-8 w-8 text-blue-600" />
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
            <Scale className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Syarat dan ketentuan layanan PT PROPERTINDO SENTOSA BERSAMA
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
                  Selamat datang di PT PROPERTINDO SENTOSA BERSAMA. Syarat dan Ketentuan ini mengatur penggunaan layanan Kami 
                  dan hubungan hukum antara Anda ("Klien") dan PT PROPERTINDO SENTOSA BERSAMA ("Kami" atau "Perusahaan").
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-2" />
                    1. Definisi
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>"Perusahaan"</strong> adalah PT PROPERTINDO SENTOSA BERSAMA, perusahaan yang bergerak di bidang real estat dan sewa guna usaha properti</li>
                      <li><strong>"Klien"</strong> adalah individu atau badan usaha yang menggunakan layanan Perusahaan</li>
                      <li><strong>"Layanan"</strong> mencakup sewa guna usaha properti, real estat yang dimiliki atau disewa, konsultasi properti, dan layanan terkait</li>
                      <li><strong>"Properti"</strong> adalah tanah dan/atau bangunan yang menjadi objek layanan Perusahaan</li>
                      <li><strong>"NIB"</strong> adalah Nomor Induk Berusaha Perusahaan: 2204240226879</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                    2. Penerimaan Syarat dan Ketentuan
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Dengan menggunakan layanan Kami, Anda menyatakan bahwa Anda telah membaca, memahami, dan setuju untuk terikat 
                      oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian manapun dari Syarat dan Ketentuan ini, 
                      Anda tidak boleh menggunakan layanan Kami.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Layanan Perusahaan</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Perusahaan menyediakan layanan berikut:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Sewa Guna Usaha Properti (KBLI 77400):</strong> Penyediaan properti untuk keperluan bisnis tanpa hak opsi intelektual properti</li>
                      <li><strong>Real Estat (KBLI 68111):</strong> Manajemen dan penyewaan properti yang dimiliki atau disewa Perusahaan</li>
                      <li><strong>Konsultasi Properti:</strong> Analisis pasar dan strategi investasi properti</li>
                      <li><strong>Layanan Pendukung:</strong> Bantuan perizinan, legal compliance, dan dokumentasi</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kewajiban Klien</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Sebagai Klien, Anda berkewajiban untuk:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Memberikan informasi yang akurat dan lengkap</li>
                      <li>Memenuhi persyaratan administrasi dan perizinan</li>
                      <li>Melakukan pembayaran sesuai kesepakatan</li>
                      <li>Memelihara properti dengan baik sesuai perjanjian</li>
                      <li>Mematuhi peraturan perundang-undangan yang berlaku</li>
                      <li>Memberitahukan Perusahaan jika ada perubahan informasi</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kewajiban Perusahaan</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Perusahaan berkewajiban untuk:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Menyediakan layanan sesuai kesepakatan</li>
                      <li>Memastikan properti dalam kondisi layak</li>
                      <li>Memberikan informasi yang transparan</li>
                      <li>Melakukan pemeliharaan properti sesuai standar</li>
                      <li>Mematuhi peraturan perundang-undangan</li>
                      <li>Melindungi data pribadi Klien</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pembayaran</h2>
                  <div className="space-y-4 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Pembayaran harus dilakukan sesuai dengan jadwal yang disepakati</li>
                      <li>Metode pembayaran akan diinformasikan secara terpisah</li>
                      <li>Keterlambatan pembayaran dapat dikenakan denda</li>
                      <li>Semua biaya tambahan harus disepakati sebelumnya</li>
                      <li>Perusahaan berhak menahan layanan untuk pembayaran yang tertunda</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Jangka Waktu dan Perpanjangan</h2>
                  <div className="space-y-4 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Jangka waktu layanan ditentukan dalam perjanjian terpisah</li>
                      <li>Perpanjangan harus disepakati oleh kedua belah pihak</li>
                      <li>Perpanjangan otomatis hanya berlaku jika disepakati tertulis</li>
                      <li>Pengakhiran layanan harus mengikuti prosedur yang ditetapkan</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Kekayaan Intelektual</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Semua materi, konten, dan informasi di website dan materi pemasaran Perusahaan dilindungi oleh 
                      hukum kekayaan intelektual. Anda tidak boleh menggunakan, mereproduksi, atau mendistribusikan 
                      materi tersebut tanpa izin tertulis dari Perusahaan.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kerahasiaan</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Kedua belah pihak setuju untuk menjaga kerahasiaan informasi yang diperoleh selama hubungan bisnis. 
                      Informasi rahasia tidak boleh dibagikan kepada pihak ketiga tanpa persetujuan tertulis.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Pembatasan Tanggung Jawab</h2>
                  <div className="space-y-4 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial</li>
                      <li>Tanggung jawab Perusahaan dibatasi pada nilai layanan yang disediakan</li>
                      <li>Perusahaan tidak bertanggung jawab atas kejadian di luar kendali (force majeure)</li>
                      <li>Klien setuju untuk menggunakan layanan atas risiko sendiri</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Force Majeure</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Perusahaan tidak bertanggung jawab atas kegagalan melaksanakan kewajiban jika disebabkan oleh 
                      kejadian di luar kendali yang wajar, termasuk tetapi tidak terbatas pada bencana alam, perang, 
                      pemogokan, atau perubahan peraturan pemerintah.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Penyelesaian Sengketa</h2>
                  <div className="space-y-4 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sengketa akan diselesaikan melalui musyawarah terlebih dahulu</li>
                      <li>Jika musyawarah gagal, sengketa akan diselesaikan melalui mediasi</li>
                      <li>Sebagai upaya terakhir, sengketa akan diselesaikan melalui pengadilan di Depok</li>
                      <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Perubahan Syarat dan Ketentuan</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Perusahaan berhak mengubah Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan akan diberitahukan 
                      melalui website atau email. Penggunaan terus-menerus layanan setelah perubahan berarti Anda menerima 
                      syarat yang diperbarui.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Legalitas Perusahaan</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>PT PROPERTINDO SENTOSA BERSAMA adalah perusahaan yang:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Terdaftar dengan NIB: 2204240226879</li>
                      <li>Berkantor di Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok</li>
                      <li>Berstatus Usaha Mikro dengan penanaman modal PMDN</li>
                      <li>Memiliki KBLI 77400 dan 68111</li>
                      <li>Tersertifikasi secara elektronik oleh BSrE-BSSN</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
                    15. Kontak dan Informasi
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>Untuk pertanyaan atau informasi lebih lanjut mengenai Syarat dan Ketentuan ini, hubungi:</p>
                    <div className="bg-blue-50 rounded-lg p-6 mt-4">
                      <p><strong>PT PROPERTINDO SENTOSA BERSAMA</strong></p>
                      <p>NIB: 2204240226879</p>
                      <p>Email: eko04150@gmail.com</p>
                      <p>Telepon: 082382466325</p>
                      <p>Alamat: Jln. Angrek Raya 1 No 143, Pengasinan, Sawangan, Depok, Jawa Barat 16518</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <p className="text-sm text-gray-600 text-center">
                    Dengan menggunakan layanan PT PROPERTINDO SENTOSA BERSAMA, Anda mengakui telah membaca, 
                    memahami, dan menyetujui Syarat dan Ketentuan ini sepenuhnya.
                  </p>
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
                <FileText className="h-8 w-8 text-blue-400" />
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