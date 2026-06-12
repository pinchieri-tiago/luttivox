import Image from "next/image";

export const Demo = () => {
  return (
    <section className="mt-7 lg:mt-12">
      <div className="flex flex-col items-center text-3xl">
        <h2 className="text-primary-700 font-bold">Demonstração da IA</h2>
        <p className="mt-3 max-w-65 text-center text-lg font-bold md:max-w-120">
          Seu tutor inteligente disponível 24 horas
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row lg:mt-8">
        <div className="min-h-42 max-w-86 rounded-2xl border border-gray-700 p-4 shadow-2xl">
          <div className="mb-3 flex flex-col items-center justify-center">
            <p>
              <span className="text-primary-500 font-bold">Aluno:</span>{" "}
              Explique fotossíntese de forma simples.
            </p>
            <p>
              <span className="font-bold text-primary-500"> IA: </span>Fotossíntese é o processo pelo qual as plantas
              transformam luz solar em energia para crescer. Elas utilizam água,
              gás carbônico e luz para produzir alimento e oxigênio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
