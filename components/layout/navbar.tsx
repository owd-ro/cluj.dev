"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { Github } from "../shared/icons";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center border-b border-gray-200 ${
          scrolled ? " bg-white/50 backdrop-blur-xl" : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <span className="text-brand-primary">
              cluj<span className="font-bold text-brand-secondary">.</span>dev
            </span>
          </Link>
          <div className="flex items-center space-x-5">
            <a href="https://github.com/owd-ro/cluj.dev" target="_blank">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
