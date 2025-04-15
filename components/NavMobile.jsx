"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";

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

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-primary flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-white border-none text-primary">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>

          {/* Menu de links */}
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-primary uppercase font-primary font-medium tracking-[1.2px]"
              >
                <Link
                  href={link.path}
                  className="cursor-pointer hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)} // fecha o menu ao clicar
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Redes sociais */}
          <Socials containerStyles="text-primary text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
