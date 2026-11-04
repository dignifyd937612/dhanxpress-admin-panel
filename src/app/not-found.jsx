import Link from "next/link";
import Image from "next/image";

import notFoundImg from "../../public/assets/common/not-found.png";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-[#121212]">
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src={notFoundImg}
          alt="404"
          width={500}
          height={400}
          priority
          className="object-contain"
        />

        <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 rounded-2xl bg-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
        >
          Back To Dashboard
        </Link>
      </div>
    </div>
  );
}
