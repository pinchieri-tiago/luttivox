import Link from "next/link";

export const Auth = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-8 md:mr-6 md:flex-row md:p-1">
      <Link
        href="/login"
        className="text-primary-900 w-full text-center text-2xl font-bold md:text-lg"
      >
        Entrar
      </Link>
      <Link
        href="/registrar"
        className="from-primary-700 hover:from-secondary-600 hover:to-primary-700 to-secondary-600 rounded-xl bg-linear-to-r px-4 py-2 text-2xl text-white transition-all duration-500 md:text-lg"
      >
        Registrar
      </Link>
    </div>
  );
};
