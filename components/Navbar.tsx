"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import path from "path";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuToggleRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  console.log(pathname)

  const navLinkItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "Catalog",
      path: "/catalog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // Menu toggle functionality
  const handleMenuToggle = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("active");
    }
  };
  useEffect(() => {
    gsap.to("#nav", {
      duration: 0.5,
      height: "5rem",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
      },
    });
    const navLinks =
      document.querySelectorAll<HTMLAnchorElement>("#nav #menu li a");
    const crsr = document.querySelector("#cursor");

    // Add hover effects to navigation links
    navLinks.forEach((navLink) => {
      navLink.addEventListener("mouseenter", () => {
        crsr?.classList.add("hoverCursor");
      });
      navLink.addEventListener("mouseout", () => {
        crsr?.classList.remove("hoverCursor");
      });
    });
    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("mouseenter", () => {
          crsr?.classList.add("hoverCursor");
        });
        navLink.removeEventListener("mouseout", () => {
          crsr?.classList.remove("hoverCursor");
        });
      });
    };
  });
  return (
    <nav id="nav" ref={navRef} className="linearGradientBg">
      <div id="phoneVisible">
        <div id="logo">
          <Image
            src="/logo.svg"
            alt="logo"
            className="h-12 w-auto"
            width={48}
            height={48}
          />
        </div>
        <h2>Unilib</h2>
        <div id="menuToggle" ref={menuToggleRef} onClick={handleMenuToggle}>
          <AlignJustify />
        </div>
      </div>
      <ul id="menu">
        <div id="navigationLinks">
          {navLinkItems.map((item, id) => (
            <li className="navLinkItem" key={id}>
              <Link
                href={`#${item.path}`}
                className={`navLink ${
                  pathname == item.path ? "primaryLink" : ""
                }`}
              >
                {item.name}
              </Link>
              <Link href={`#${item.path}`} className="hoverLink">
                {item.name}
              </Link>
            </li>
          ))}
        </div>
        <div className="px-6 w-max flex justify-end">
          <Button>Search</Button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
