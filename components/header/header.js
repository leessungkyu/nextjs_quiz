import Link from "next/link";
import "@/components/header/header.css"

export default function HeaderPage(){
  return(
    <header>
      <div><Link href="/"><img src="icon.png"/></Link></div>
      <nav>
        <ul>
          <li><Link href="/quiz">QUIZ</Link></li>
          <li><Link href="/111">111</Link></li>
        </ul>
      </nav>
    </header>
  )
}