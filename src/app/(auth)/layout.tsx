import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const session = await auth();
  if (session?.user?.id) redirect("/dashboard");
  return (
    <div className="bg-secondary-50 flex min-h-screen flex-col items-center justify-center">
      <div className="my-4 flex min-w-76 flex-col items-center gap-4 rounded-4xl bg-white p-5 md:min-w-2xl md:flex-row md:justify-center lg:min-w-4xl">
        <div className="order-2">
          <Link href="/" className="flex justify-center">
            <Image
              src="/neural.png"
              alt="imagem de representação de inteligência artificial"
              width={400}
              height={400}
              loading="eager"
              className="h-auto w-45 md:w-77"
              priority
              quality={100}
            />
          </Link>
        </div>
        <div className="order-1 w-full md:max-w-66 lg:max-w-105">
          {children}
        </div>
      </div>
    </div>
  );
}
