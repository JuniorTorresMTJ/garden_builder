"use client";

import Link from "next/link";

// components
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const links = [
  {
    name: "What we do",
    path: "/what",
  },
  {
    name: "Projects",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="bg-[url('/Logo.gif')] bg-center bg-no-repeat bg-cover lg:bg-contain h-[200px] w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full relative flex items-center justify-end px-4">
        {/* Logo clicável no centro */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[120px]"
        >
          <span className="block w-full h-full" />
        </Link>
        {/* Nav desktop */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-primary text-sm uppercase font-primary font-medium tracking-[1.2px] after:mx-4 last:after:content-none after:text-accent"
              >
                <Link
                  href={link.path}
                  className="cursor-pointer relative text-primary text-sm uppercase font-primary font-medium tracking-[1.2px] before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-accent before:transition-all before:duration-300 hover:before:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Socials
            containerStyles="flex items-center ml-2"
            iconStyles="text-primary text-xl hover:text-accent transition-colors"
          />
        </nav>

        {/* Nav mobile */}
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
