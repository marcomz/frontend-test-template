import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-[#404040] py-15">
      <Link href="/">
        <Image src="/Apply-Digital-Logo.svg" width={170} height={44} alt="Apply Digital Logo" className="m-auto" />
      </Link>
    </div>
  );
}
