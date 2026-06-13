export default async function Loading() {
  return (
    <div className="from-background to-background/95 flex min-h-screen items-center justify-center bg-linear-to-b">
      <div className="flex flex-col items-center gap-8 p-6">
        {/* Spinner animado */}
        <div className="relative h-20 w-20">
          <div className="from-primary-500 to-secondary-500/50 absolute inset-0 animate-spin rounded-full bg-linear-to-r" />
          <div className="bg-background absolute inset-2 rounded-full" />

          {/* Círculos decorativos */}
          <div className="border-primary-500/20 absolute inset-0 animate-pulse rounded-full border-4" />
          <div
            className="border-secondary-500/20 absolute inset-4 animate-pulse rounded-full border-4"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        {/* Texto de carregamento */}
        <div className="space-y-3 text-center">
          <h2 className="text-foreground text-lg font-bold md:text-xl">
            Carregando...
          </h2>
          <p className="text-muted-foreground max-w-xs text-sm md:text-base">
            Preparando sua experiência de aprendizado com IA
          </p>
        </div>

        {/* Indicador de progresso com dots animados */}
        <div className="flex gap-2 pt-4">
          <span
            className="bg-primary-500 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="bg-secondary-500 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="bg-primary-500 h-2 w-2 animate-bounce rounded-full"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}

