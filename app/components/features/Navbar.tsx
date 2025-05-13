"use client";
import Image from "next/image";
import CommonButton from "../common/CommonButton";
import { useState, useRef, useEffect } from "react";
import { Link, MenuIcon } from "lucide-react";

const navArgs = [
  { hash: "#about-us", title: "About Us" },
  { hash: "#services", title: "Services" },
  { hash: "#case-studies", title: "Case Studies" },
  { hash: "#process", title: "Process" },
  { hash: "#contact-us", title: "Contact Us" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <nav className="flex items-center justify-between w-full gap-4 relative py-4 ">
      <div className="flex-1">
        <Image
          src="/assets/brand/logo.webp"
          alt="logo"
          width={291}
          height={36}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center justify-end gap-8 max-lg:hidden flex-[2]">
        <ul className="flex items-center gap-6">
          {navArgs.map((arg) => (
            <li
              key={arg.title}
              className="
            responsiveListFontSize font-normal leading-7"
            >
              <a href={arg.hash}>{arg.title}</a>
            </li>
          ))}
        </ul>
        <CommonButton
          title="request a quote"
          variant="outline"
          buttonClasses="hover:bg-main-green/50 border-main-dark hover:shadow-sm hover:shadow-main-dark transition-all duration-300 text-[20px]"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex-1 flex items-center justify-end">
        <button aria-label="Toggle Menu" onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`${
          openMenu ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 z-10`}
      >
        <ul className="flex flex-col gap-4">
          {navArgs.map((arg) => (
            <li key={arg.title} className="text-[18px] font-normal leading-7">
              <a href={arg.hash}>{arg.title}</a>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <CommonButton
            title="request a quote"
            variant="outline"
            buttonClasses="w-full hover:bg-main-green/50 border-main-dark hover:shadow-sm hover:shadow-main-dark transition-all duration-300 text-[18px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
