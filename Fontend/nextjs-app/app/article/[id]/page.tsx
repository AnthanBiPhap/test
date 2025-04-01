import axios from "axios"
import Link from "next/link"
import { CalendarIcon, ArrowLeft } from "lucide-react"

type Article = {
  _id: string
  title: string
  description: string
  keyword: string
  content: string
  date: string
}

async function fetchArticle(id: string): Promise<Article | null> {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/articles/${id}`)
    return res.data.data
  } catch (error) {
    console.error("Lỗi khi lấy bài viết:", error)
    return null
  }
}

export default async function ArticleDetail({ params }: { params: { id: string } }) {
  const { id } = await params; 
  const article = await fetchArticle(id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Bài viết không tìm thấy</h2>
          <p className="mt-2 text-gray-500 mb-6">Bài viết này có thể đã bị xóa hoặc không tồn tại.</p>
          <Link href="/" className="flex items-center text-blue-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    )
  }

  // Xử lý keywords để hiển thị dưới dạng badges
  const keywords = article.keyword
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean)

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 mb-4 -ml-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại danh sách
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

          <div className="flex items-center text-gray-500 text-sm mb-6">
            <div className="flex items-center mr-4">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-8">
            <p className="text-gray-700 text-lg italic">{article.description}</p>
          </div>
        </div>

        <div className="my-8 border-t border-gray-200"></div>

        <div className="prose prose-blue max-w-none">
          <div className="text-gray-800 leading-relaxed">
            {article.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="my-8 border-t border-gray-200"></div>

        <div className="flex flex-wrap items-center mt-8">
          <span className="text-gray-700 mr-2">Keywords:</span>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
