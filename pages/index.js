import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Link href="/login">
        <a className="w-32 font-semibold aspect-square flex justify-center items-center bg-primary-500 rounded-md shadow-md text-white">
          Login
        </a>
      </Link>
    </div>
  );
}
