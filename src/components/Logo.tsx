import Link from "next/link";
import localFont from 'next/font/local'

const area = localFont({
  src: '../../public/fonts/Area-Bold.otf',
})

export default function Logo() {
  return (
    <Link href="/">
      <div className={`logo ${area.className} text-gray-600 text-2xl/6 tracking-[0.4px]`}>GamerShop</div>
    </Link>
  )
}
