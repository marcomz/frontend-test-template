import Link from 'next/link';
import Image from 'next/image';

export default function BackToCatalog() {
  return (
    <Link href="/">
      <div className="flex pl-7.5 pt-5 max-w-5xl mx-auto lg:px-0">
        <Image src="/arrow.svg" width={12} height={12} alt="Back Arrow" />
        <div className="font-medium leading-4 text-[#3b3b3b] ml-[14]">Back to Catalog</div>
      </div>
    </Link>
  )
};
