import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mt-15 flex flex-col md:flex-row md:items-center xl:max-w-243 md:max-w-162 lg:max-w-188 mx-auto">
      <div className="md:max-w-114">
        <div className="flex w-full flex-col justify-center gap-3 p-3">
          <h1 className="text-lg lg:text-2xl font-black ">
            <span className="text-primary-500 "> Aprenda</span> Qualquer Assunto
            com o Poder da{" "}
            <span className="text-primary-500">Inteligência Artificial</span>
          </h1>

          <p className="text-sm">
            Estude de forma personalizada, receba explicações adaptadas ao seu
            nível e acelere seu aprendizado com um tutor de IA disponível 24
            horas por dia.
          </p>
          <p>✔ Resumos automáticos</p>
          <Link
            href="/registrar"
            className="from-primary-700 hover:from-secondary-600 hover:to-primary-700 to-secondary-600 rounded-xl bg-linear-to-r px-4 py-2 text-center text-lg text-white transition-all duration-500 md:text-lg"
          >
            Começar gratuitamente
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/student.png"
          width={300}
          height={300}
          alt="Robô"
          className="w-full md:w-177 lg:w-267"
        />
      </div>
    </section>
  );
};
