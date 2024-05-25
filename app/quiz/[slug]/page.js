import Link from "next/link";

export default function QuizDetailPage({params}){
  return(
    <div>
      <h1>퀴즈상세페이지</h1>
      <p>{params.slug}번째 퀴즈</p>
      <Link href="/quiz">퀴즈로 돌아가기</Link>
    </div>
  )
}