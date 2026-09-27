import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export default function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center", className)}
      aria-label="Western Energy and Ventures Pvt. Ltd. — Home"
    >
      <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-[0_4px_18px_rgba(4,29,43,0.28)] ring-2 ring-white">
        <Image
          src="/images/logo-westernenergy-square.jpg"
          alt="Western Energy and Ventures Pvt. Ltd."
          width={848}
          height={848}
          className="h-full w-full object-cover"
        />
      </span>
    </Link>
  );
}