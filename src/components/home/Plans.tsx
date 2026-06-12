import Image from "next/image";

export const Plans = () => {
  return (
    <section id="planos" className="mt-7 lg:mt-12">
      <div className="flex flex-col items-center text-3xl">
        <h2 className="text-primary-700 font-bold">Como Funciona</h2>
        <p className="mt-3 max-w-65 text-center text-lg font-bold md:max-w-120">
          Aprender nunca foi tão simples
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row lg:mt-8">
        <div className="min-h-42 max-w-86 rounded-2xl border border-gray-700 p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-center">
            <Image
              src="/target.png"
              alt="Meta"
              width={200}
              height={200}
              className="w-12"
            />
            <p className="font-bold">Explicações Simplificadas</p>
          </div>
          <div className="flex justify-center">
            <p className="text-center">
              Defina seu objetivo Escolha o que deseja aprender.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
