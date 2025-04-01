import axios from "axios"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"

type Article = {
  _id: string
  title: string
  description: string
  keyword: string
  content: string
  date: string
}

async function fetchArticles(): Promise<Article[]> {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/articles")
    if (Array.isArray(res.data.data?.articles)) {
      return res.data.data.articles
    } else {
      console.error("Dữ liệu trả về không đúng định dạng:", res.data)
      return []
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error)
    return []
  }
}

export default async function Home() {
  const articles = await fetchArticles()

  if (!Array.isArray(articles) || articles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Không có bài viết nào</h2>
          <p className="mt-2 text-gray-500">Vui lòng quay lại sau.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Danh sách bài viết</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            href={`/article/${article._id}`}
            key={article._id}
            className="block h-full transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="h-full flex flex-col border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow duration-300 p-4 bg-white rounded-lg">
              <div className="pb-2">
                <h2 className="text-xl font-bold text-blue-700 line-clamp-2">{article.title}</h2>
              </div>
              <div className="flex-grow">
                <p className="text-gray-600 line-clamp-3">{article.description}</p>
              </div>
              <div className="flex justify-between items-center pt-2 border-t text-sm text-gray-500">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
                </div>
                {article.keyword && (
                  <span className="inline-block py-1 px-3 text-xs font-semibold text-blue-700 border border-blue-500 rounded-full bg-blue-50">
                    {article.keyword.split(",")[0]}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
