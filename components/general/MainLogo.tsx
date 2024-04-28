import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export const MainLogo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 flex">
        <Image
          src="/images/logo/logoipsum-265.svg"
          alt="Logo"
          height={80}
          width={80}
        />
        <p className={cn(
          "text-lg text-neutral-700 dark:text-white hidden md:flex",
          headingFont.className,
        )}>
          PDF Gen
        </p>
      </div>
    </Link>
  );
};