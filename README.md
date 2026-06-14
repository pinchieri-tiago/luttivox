# Luttivox

Aprenda qualquer assunto com o poder da Inteligência Artificial — um tutor inteligente disponível 24 horas que cria planos de estudo personalizados, fornece explicações adaptadas ao seu nível e acelera seu aprendizado.

**Principais pontos**

- **Resumo:** Plataforma de estudo com IA que gera resumos, planos de estudo inteligentes e explicações simplificadas.
- **Demonstração:** Chat tutor capaz de explicar assuntos (ex.: fotossíntese) de forma simples.
- **Planos:** Gratuito (plano básico, chat limitado) e Premium (IA ilimitada, relatórios).

## Como Funciona

- Defina seu objetivo de estudo.
- Converse com o tutor de IA para receber explicações e resumos.

## Recursos

- Plano de estudos inteligente adaptado ao seu tempo e nível.
- Explicações claras e adaptadas ao nível do aluno.
- Resumos automáticos e demonstração interativa do assistente.
- Autenticação com fluxo de login/registro.

## Tecnologias

- Next.js
- React
- NextAuth
- Drizzle ORM (Drizzle-kit)
- Tailwind CSS
- Zod, React Hook Form
- Sonner (notificações)

(Veja `package.json` para dependências completas.)

## Instalação e execução

1. Instale dependências:

```bash
npm install
```

2. Executar em modo desenvolvimento:

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build
npm run start
```

## Variáveis de ambiente

Configure um arquivo `.env` com pelo menos:

- `DATABASE_URL` — string de conexão do banco (Neon/Postgres, etc.)
- `NEXTAUTH_URL` — URL base da aplicação
- `NEXTAUTH_SECRET` — segredo do NextAuth

Outras variáveis podem ser necessárias dependendo do provedor de email/autenticação e configurações do banco.

## Banco de dados

Este projeto usa Drizzle ORM (e possivelmente `drizzle-kit`) para migrações e esquema. Verifique `src/db/schema.ts` e `drizzle.config.ts` para detalhes de configuração.

## Autenticação

O fluxo de autenticação inclui registro e login (componentes em `src/components/auth` e rotas em `src/app/(auth)`), com validação de formulários via Zod e `react-hook-form`.

## Estrutura relevante

- `src/app/page.tsx` — página inicial que monta os componentes do site.
- `src/components/home/` — `Hero`, `Benefits`, `About`, `Demo`, `Plans`, `Header`, `Footer`.
- `src/components/auth/` — componentes de `Login` e `Register`.
- `src/db/` — configuração e esquema do banco.
- `src/lib/auth.ts` — funções de suporte à autenticação.

## Contribuição

Sinta-se à vontade para abrir issues e pull requests. Para desenvolvimento local, siga as instruções de instalação acima.

## Observações

- Conteúdo do README gerado a partir dos componentes do site. Ajuste textos, licença e instruções conforme necessário.
