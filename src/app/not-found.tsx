import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-3 shadow-xl">
        <div className="ml-4">
          <Link href="/" title="Link para página inicial">
            <Image
              src="/logo.png"
              alt="logotipo da aplicação"
              width={200}
              height={200}
              title="logotipo da aplicação"
              loading="eager"
              className="md:w-25 lg:w-35"
            />
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-2xl space-y-8 text-center">
          {/* 404 Number with gradient */}
          <div className="relative">
            <h1 className="from-primary-500 to-secondary-500 bg-linear-to-r bg-clip-text text-9xl font-black text-transparent drop-shadow-lg">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Página não encontrada
            </h2>
            <p className="text-xl text-gray-600">
              Desculpe, a página que você procura não existe ou foi movida.
            </p>
          </div>

          {/* Illustration or emoji */}
          <div className="animate-bounce text-6xl">🔍</div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href="/"
              className="from-primary-500 to-primary-700 inline-flex items-center justify-center rounded-lg bg-linear-to-r px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              ← Voltar para Home
            </Link>
            <Link
              href="/#beneficios"
              className="inline-flex items-center justify-center rounded-lg bg-gray-200 px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-300"
            >
              Explorar Benefícios
            </Link>
          </div>

          {/* Footer text */}
          <div className="pt-8 text-sm text-gray-500">
            <p>Precisa de ajuda? Entre em contato conosco.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
