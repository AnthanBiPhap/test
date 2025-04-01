import type React from "react"
import "./globals.css"
import { BookOpenText, Mail, Phone, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <BookOpenText className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Trang Bài Viết
                </span>
              </Link>

              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Trang chủ
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Danh mục
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Giới thiệu
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Liên hệ
                </Link>
              </nav>

              <div className="md:hidden">
                <button className="p-2 text-gray-700 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-900 text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpenText className="h-5 w-5 mr-2 text-blue-400" />
                  Trang Bài Viết
                </h3>
                <p className="text-gray-400 mb-4">Nơi chia sẻ kiến thức và thông tin hữu ích cho cộng đồng.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Danh mục</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Công nghệ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Đời sống
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Giáo dục
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Sức khỏe
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="text-gray-400">contact@trangbaiviet.com</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="text-gray-400">0123 456 789</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} - Bản quyền thuộc về bạn</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

