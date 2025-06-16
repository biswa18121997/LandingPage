import Link from "next/link"


type NavItem = {
  name: string;
  href: string;
};
// app/components/Header.tsx
export default function Header() {

  const arr : NavItem[] = [
    {name: "Lorem Ipsum ▾", href: "#"},
    {name: "Lorem Ipsum ▾", href: "/SectionI"}, 
    {name: "Lorem Ipsum ▾", href: "#"},
    {name: "Lorem Ipsum ▾", href: "#"},
    {name: "Lorem Ipsum ▾", href: "#"}

  ]
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/40 text-black backdrop-blur z-50 border-b border-gray-200 ">
      <div className="bg-gray-200 px-4 py-2 font-bold text-xl">LOGO</div>
      <nav className="space-x-6 text-gray-600 font-medium flex">
        {arr.map((item, index) => (
          <Link href={item.href} key={index}>
            <p className="hover:underline cursor-pointer">{item.name}</p>
          </Link>
        ))}
      </nav>
      <button className="border bg-blue-600 border-gray-500 px-4 py-1 rounded font-medium text-sm hover:shadow text-white">
        Sign In
      </button>
    </header>
  );
}
