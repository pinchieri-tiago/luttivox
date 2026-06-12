import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary-50 mt-12">
      <div>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:p-5 md:gap-7 lg:gap-44">
          <div className="flex flex-col items-center p-3">
            <Image
              src="/logo.png"
              alt="logotipo"
              width={200}
              height={200}
              className="h-auto w-30 xl:w-55"
              loading="eager"
            />
            <p className="my-2 text-center text-sm lg:text-xl font-semibold md:max-w-94">
              Aprenda de forma mais inteligente, organizada e eficiente.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-8">
              <div>
                <p className="font-black">Produto</p>
                <div className="flex flex-col">
                  <Link href="/#planos" className="font-bold underline">
                    Planos
                  </Link>
                  <Link href="/#demonstracao" className="font-bold underline">
                    Demonstração
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-black">Legal</p>
                <div className="flex flex-col">
                  <Link href="/termos" className="font-bold underline">
                    Termos
                  </Link>
                  <Link href="politica" className="font-bold underline">
                    Política
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className="bg-secondary-600 p-3 text-center font-bold text-white">
            {new Date().getFullYear()}- Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
