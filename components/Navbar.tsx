import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-neutral-800">
      <nav className="container py-2 mx-auto">
        <ul className="flex space-x-6 text-lg justify-center">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/garrett-huggins/next13-blog-starter">
              Github
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

type NavLink = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
  return (
    <Link className="hover:text-gray-300 hover:underline" href={href}>
      {children}
    </Link>
  );
};
