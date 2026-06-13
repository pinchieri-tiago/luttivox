import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-secondary-50 min-h-screen">
      <div>
        <Image
          src="/neural.png"
          alt="imagem de representação de inteligência artificial"
          width={400}
          height={400}
          loading="eager"
          className="h-auto w-45"
          priority
          quality={100} 
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
