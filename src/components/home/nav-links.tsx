import Link from "next/link";

export const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#beneficios">Benefícios</Link>
        </li>
        <li>
          <Link href="/#sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/#demonstracao">Demonstração</Link>
        </li>
        <li>
          <Link href="/#planos">Planos</Link>
        </li>
      </ul>
    </nav>
  );
};
