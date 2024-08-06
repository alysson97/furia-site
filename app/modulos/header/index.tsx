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
      <header className={`justify-between md:items-center md:p-8 fixed md:static w-full md:text-white md:flex md:h-auto z-20 top-0 ${isMenuOpen ? 'bg-[#ffffffde] text-black h-screen' : 'bg-black'}`}>
        <div className="logo hidden md:block">
          <Image src={logo} alt="" width={50} />
        </div>
        <div className="md:hidden flex w-full md:w-auto justify-end">
          <button onClick={toggleMenu} className="text-xl pt-6 pr-6">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav className={`header-items ${isMenuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`}>
          <p className="hover:bg-black hover:text-white"><a href="#sec1">Home</a></p>
          <p className="hover:bg-black hover:text-white"><a href="#sec2">História</a></p>
          <p className="hover:bg-black hover:text-white"><a href="#sec3">Times</a></p>
          <p className="hover:bg-black hover:text-white"><a href="#sec4">Produtos</a></p>
          <p className="hover:bg-black hover:text-white"><a href="#sec5">Patrocinadores</a></p>
          <p className="hover:bg-black hover:text-white"><a href="#sec6">Contatos</a></p>
        </nav>
        
        <div className="md:block hidden"></div>
      </header>
    </>
  );
}