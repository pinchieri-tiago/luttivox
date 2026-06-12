import Image from "next/image";

export const Benefits = () => {
  return (
    <section className="mt-7 lg:mt-12">
      <div className="flex flex-col items-center text-3xl">
        <h2 className="text-primary-700 font-bold">Benefícios</h2>
        <p className="mt-3 max-w-65 text-center text-lg font-bold md:max-w-120">
          Tudo o que você precisa para aprender mais rápido
        </p>
      </div>
      <div className="mt-4 lg:mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="  mb-4 md:mb-0 min-h-42 max-w-86 rounded-2xl border border-gray-700 p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-center">
            <Image
              src="/goal.png"
              alt="Meta"
              width={200}
              height={200}
              className="w-12"
            />
            <p className="font-bold">Plano de Estudos Inteligente</p>
          </div>
          <div className="flex justify-center">
            <p className="text-center">
              A IA cria um cronograma personalizado baseado nos seus objetivos,
              tempo disponível e nível de conhecimento.
            </p>
          </div>
        </div>
        <div className="  min-h-42 max-w-86 rounded-2xl border border-gray-700 p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-center">
            <Image
              src="/brain.png"
              alt="Meta"
              width={200}
              height={200}
              className="w-12"
            />
            <p className="font-bold">Explicações Simplificadas</p>
          </div>
          <div className="flex justify-center">
            <p className="text-center">
              Receba explicações claras e adaptadas ao seu nível de compreensão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
