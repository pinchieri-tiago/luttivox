"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLinksProps {
  setIsOpenSheet?: (open: boolean) => void;
}

export const NavLinks = ({ setIsOpenSheet }: NavLinksProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Observa as seções visíveis para atualizar o link ativo
    const sectionIds = ["beneficios", "sobre", "demonstracao", "planos"];
    const observerOptions: IntersectionObserverInit = {
      root: null,
      // Ajuste o rootMargin para considerar o header sticky
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      // escolhe a entrada com maior interseção para evitar flicker
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;
      let best = visible[0];
      for (let i = 1; i < visible.length; i++) {
        if (visible[i].intersectionRatio > best.intersectionRatio)
          best = visible[i];
      }
      setActiveSection((best.target as HTMLElement).id);
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      if (window.scrollY < 80) setActiveSection("home");
    };

    window.addEventListener("scroll", onScroll);

    // inicializa estado baseado na posição
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Fecha o sheet primeiro na versão mobile
    setIsOpenSheet?.(false);

    // Atualiza o hash na URL sem forçar activeSection imediatamente;
    // o IntersectionObserver vai atualizá-lo quando a seção estiver visível.
    if (sectionId === "home") {
      window.history.pushState(null, "", "/");
      // delay maior para permitir que animações do sheet terminem no mobile
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 350);
    } else {
      window.history.pushState(null, "", `/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="flex flex-col items-center md:min-h-16 md:flex-row">
      <ul className="text-primary-900 flex flex-col items-center gap-4 p-4 text-2xl md:flex-row md:text-xs lg:text-xl">
        <li>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
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
