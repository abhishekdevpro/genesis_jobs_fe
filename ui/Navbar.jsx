import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button.jsx";
import Link from "next/link";
import { useRouter } from "next/navigation.js";
import axios from "axios";
import { BASE_URL } from "../components/Constant/constant.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user,setUser]= useState(null)
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const router = useRouter();
  
  // const token = localStorage.getItem("token");

  // const fetchUser = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}/api/user/user-profile`, {
  //       headers: {
  //         // Authorization: token,
  //       },
  //     });

  //     if(res.data.code===200 || res.data.status==="success"){

  //     }
  //   } catch (error) {}
  // };
  const navLinks = [
    { name: "AI Resume Builder", href: "#" },
    { name: "Resources", href: "#" },
    { name: "About Us", href: "#" },
    // ...(token ? [{ name: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src={logo} alt="Logo" className="h-12 md:w-64 md:h-16" /> */}
            <h1 className="text-xl md:text-[36px] font-bold text-primary">
              Genesis Live AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-md font-medium text-black hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => router.push("/login2")}
              variant="primary"
              size="md"
              className="ml-4"
            >
              Login
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-primary focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-2 text-base font-medium text-black hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-2">
              <Button variant="primary" size="sm" className="w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
