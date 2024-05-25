import Link from "next/link";

export default function QuizPage(){
  return(
    <div>
      <h1>퀴즈페이지</h1>
      <p><Link href="/quiz/1">첫번째 퀴즈</Link></p>
      <p><Link href="/quiz/2">두번째 퀴즈</Link></p>
      <Link href="/">메인으로 돌아가기</Link>
    </div>
  )
}