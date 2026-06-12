"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLinksProps {
    setIsOpenSheet?: (open: boolean) => void
}

export const NavLinks = ({setIsOpenSheet}: NavLinksProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  

  useEffect(() => {
    // Detecta o hash atual na URL
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove o #
      setActiveSection(hash || "home");
    };

    // Define a seção ativa na montagem
    handleHashChange();

    // Ouve mudanças de hash
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="flex md:min-h-16 flex-col md:flex-row items-center">
      <ul className="text-primary-900 flex flex-col items-center md:flex-row gap-4 p-4 text-2xl md:text-xs lg:text-xl">
        <li>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              setIsOpenSheet?.(false);
            }}
            className={cn(isActive("home") && "font-black underline")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#beneficios"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("beneficios");
               setIsOpenSheet?.(false);
            }}
            className={cn(isActive("beneficios") && "font-black underline")}
          >
            Benefícios
          </Link>
        </li>
        <li>
          <Link
            href="/#sobre"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sobre");
               setIsOpenSheet?.(false);
            }}
            className={cn(isActive("sobre") && "font-black underline")}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/#demonstracao"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("demonstracao");
               setIsOpenSheet?.(false);
            }}
            className={cn(isActive("demonstracao") && "font-black underline")}
          >
            Demonstração
          </Link>
        </li>
        <li>
          <Link
            href="/#planos"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("planos");
               setIsOpenSheet?.(false);
            }}
            className={cn(isActive("planos") && "font-black underline")}
          >
            Planos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
