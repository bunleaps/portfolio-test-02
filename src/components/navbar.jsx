import Link from "next/link";

export default function Navbar() {
  const navList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="border-b w-full p-4">
      <div className="w-1/2 mx-auto flex justify-between">
        <h1>dev@buns</h1>
        <ul className="flex gap-8">
          {navList.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
