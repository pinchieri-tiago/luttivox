import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/" title="Link para página inicial">
          <Image
            src="/logo.png"
            alt="logotipo da aplicação"
            width={200}
            height={200}
            title="logotipo da aplicação"
          />
        </Link>
      </div>
    </header>
  );
};
