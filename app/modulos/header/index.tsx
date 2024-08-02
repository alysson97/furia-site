'use client'
import Image from "next/image";
import logo from "@/public/images/FURIA_Esports_logo.webp";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center p-8">
        <div className="logo">
          <Image src={logo} alt="" width={50} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav className={`header-items ${isMenuOpen ? 'block' : 'hidden'} md:flex justify-center`}>
          <p><a href="#sec1">Home</a></p>
          <p><a href="#sec2">História</a></p>
          <p><a href="#sec3">Times</a></p>
          <p><a href="#sec4">Produtos</a></p>
          <p><a href="#sec5">Patrocinadores</a></p>
          <p><a href="#sec6">Contatos</a></p>
        </nav>
        <div className="md:block hidden"></div>
      </header>
    </>
  );
}