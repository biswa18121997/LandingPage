

'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

type NavItem = {
  name: string;
  href: string;
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const arr: NavItem[] = [
    { name: "Lorem Ipsum ▾", href: "#" },
    { name: "Lorem Ipsum ▾", href: "/SectionI" },
    { name: "Lorem Ipsum ▾", href: "#" },
    { name: "Lorem Ipsum ▾", href: "#" },
    { name: "Lorem Ipsum ▾", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur max-w-screen z-50 border-b border-gray-200 min-w-screen">
      <div className="max-w-7xl mx-auto flex justify-between sm:justify-between items-center px-4 py-4">
        <div className="bg-gray-200 px-4 py-2 font-bold text-xl">LOGO</div>

        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          {arr.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="relative group cursor-pointer border hover:border-2 border-transparent rounded-2xl p-2 hover:underline">
                <h1 className="font-bold text-lg">{item.name}</h1>
                <section className="flex flex-col opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-700 ease-in-out mt-2 space-y-1">
                  <p className="border-b">1 Lorem ipsum dolor</p>
                  <p className="border-b">2 Lorem ipsum dolor .</p>
                  <p className="border-b">3 Lorem ipsum dolor </p>
                </section>
              </div>
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <button className="hidden sm:block border active:bg-green-700 hover:bg-blue-400 duration-300 bg-blue-600 border-gray-500 px-4 py-1 rounded font-medium text-sm hover:shadow text-white ml-4">
          Sign In
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/90">
          {arr.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="relative group cursor-pointer border hover:border-2 border-transparent rounded-2xl p-2 hover:underline">
                <h1 className="font-bold text-lg">{item.name}</h1>
                <section className="flex flex-col opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-700 ease-in-out mt-2 space-y-1">
                  <p className="border-b">1 Lorem ipsum dolor</p>
                  <p className="border-b">2 Lorem ipsum dolor .</p>
                  <p className="border-b">3 Lorem ipsum dolor </p>
                </section>
              </div>
            </Link>
          ))}
          <button className="w-full mt-2 border bg-blue-600 border-gray-500 px-4 py-2 rounded font-medium text-sm hover:shadow text-white sm:invisible">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}
