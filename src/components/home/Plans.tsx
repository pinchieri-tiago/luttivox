import Image from "next/image";
import Link from "next/link";

export const Plans = () => {
  const cardItems = [
    {
      title: "Gratuito",
      image: "/gift.png",
      features: [
        {
          image: "/tick.png",
          description: "Plano básico de estudos",
        },
        {
          image: "/tick.png",
          description: "chat Limitado",
        },
      ],
      button: "gratuito",
    },
    {
      title: "Premium",
      image: "/premium.png",
      features: [
        {
          image: "/tick.png",
          description: "IA ilimitada",
        },
        {
          image: "/tick.png",
          description: "Relatórios",
        },
      ],
      button: "premium",
    },
  ];
  return (
    <section id="planos" className="mt-7 lg:mt-12">
      <div className="flex flex-col items-center text-3xl">
        <h2 className="text-primary-700 font-bold">Planos</h2>
        <p className="mt-3 max-w-65 text-center text-lg font-bold md:max-w-120">
          Escolha o plano ideal para você
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row lg:mt-8">
        {cardItems.map((item) => (
          <div
            key={item.title}
            className="min-h-42 min-w-76 rounded-2xl border border-gray-700 p-4 shadow-2xl"
          >
            <div className="mb-3 flex items-center">
              <Image
                src={item.image}
                alt="Meta"
                width={200}
                height={200}
                className="w-12"
              />
              <p className="font-bold">{item.title}</p>
            </div>
            {item.features.map((feat) => (
              <div key={feat.description} className="flex flex-col p-1">
                <p className="flex max-w-93 items-center gap-2 text-sm">
                  <Image
                    src={feat.image}
                    alt="Meta"
                    width={200}
                    height={200}
                    className="w-6"
                  />
                  {feat.description}
                </p>
              </div>
            ))}
            <div className="mt-3 w-full">
              <Link
                className="from-primary-700 hover:from-secondary-600 hover:to-primary-700 to-secondary-600 flex w-full justify-center rounded-xl bg-linear-to-r px-4 py-2 text-center text-lg font-bold text-white transition-all duration-500 md:text-lg"
                href={item.button === "gratuito" ? "/registrar" : "/planos"}
              >
                {item.button === "gratuito" ? "Começar" : "Assinar"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
