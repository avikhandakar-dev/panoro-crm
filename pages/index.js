import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-16 w-full flex justify-center flex-wrap items-center gap-4">
      <Link href="/signup">
        <a className="w-32 font-semibold aspect-square flex justify-center items-center bg-indigo-500 rounded-md shadow-md text-white">
          Sign Up
        </a>
      </Link>
      <Link href="/login">
        <a className="w-32 font-semibold aspect-square flex justify-center items-center bg-primary-500 rounded-md shadow-md text-white">
          Login
        </a>
      </Link>
      <Link href="/module">
        <a className="w-32 font-semibold aspect-square flex justify-center items-center bg-secondary-500 rounded-md shadow-md text-black">
          Module
        </a>
      </Link>
      <Link href="/recover">
        <a className="w-32 font-semibold aspect-square flex justify-center items-center bg-purple-500 rounded-md shadow-md text-white">
          Recover
        </a>
      </Link>
    </div>
  );
}
