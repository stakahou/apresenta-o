# IA Advanced Frontend

Este projeto é uma aplicação frontend avançada desenvolvida com tecnologias modernas para criar uma interface de usuário robusta e escalável. Utiliza React, TypeScript, Vite e outras bibliotecas para fornecer uma experiência de desenvolvimento eficiente e uma aplicação performática.

## Tecnologias Utilizadas

- **React 19**: Biblioteca principal para construção da interface.
- **TypeScript**: Para tipagem estática e melhor manutenção do código.
- **Vite**: Ferramenta de build rápida e moderna.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **MobX**: Gerenciamento de estado reativo.
- **React Router DOM**: Roteamento para aplicações React.
- **TanStack Query**: Gerenciamento de estado de servidor e cache de dados.
- **TanStack Table**: Componentes de tabela avançados.
- **Zod**: Validação de esquemas.
- **Lucide React**: Ícones vetoriais.
- **Shadcn/UI**: Componentes de UI reutilizáveis.
- **Vitest**: Framework de testes.

## Estrutura de Pastas

```
ia-advanced-frontend/
├── components.json          # Configuração do Shadcn/UI
├── eslint.config.js         # Configuração do ESLint
├── index.html               # Arquivo HTML principal
├── package.json             # Dependências e scripts do projeto
├── pnpm-lock.yaml           # Lockfile do pnpm
├── README.md                # Este arquivo
├── tsconfig.app.json        # Configuração TypeScript para app
├── tsconfig.json            # Configuração TypeScript principal
├── tsconfig.node.json       # Configuração TypeScript para Node
├── vite.config.ts           # Configuração do Vite
├── public/                  # Arquivos estáticos públicos
└── src/
    ├── App.tsx              # Componente principal da aplicação
    ├── index.css            # Estilos globais
    ├── main.tsx             # Ponto de entrada da aplicação
    ├── assets/              # Recursos estáticos (imagens, fontes, etc.)
    ├── components/          # Componentes reutilizáveis
    │   └── ui/              # Componentes de UI (Shadcn/UI)
    │       └── button.tsx   # Exemplo: componente Button
    ├── configs/             # Configurações da aplicação
    ├── hooks/               # Hooks customizados do React
    ├── layouts/             # Layouts da aplicação
    ├── lib/                 # Utilitários e bibliotecas
    │   └── utils.ts         # Funções utilitárias
    ├── pages/               # Páginas da aplicação
    │   └── Home/            # Página inicial
    │       └── index.tsx    # Componente da página Home
    ├── providers/           # Provedores de contexto
    │   ├── contextProviderComposer.ts  # Compositor de provedores
    │   └── index.tsx        # Exportações dos provedores
    ├── routes/              # Configuração de rotas
    │   └── index.tsx        # Definições de rotas
    ├── shared/              # Código compartilhado
    │   └── interfaces.ts    # Interfaces TypeScript
    ├── stores/              # Stores do MobX
    │   ├── CommonStore.ts   # Store comum
    │   ├── RootStore.ts     # Store raiz
    │   └── RootStoreContext.tsx  # Contexto do store raiz
    └── test/                # Configurações de teste
        └── setup.ts         # Setup para testes
```

## Scripts Disponíveis

Os seguintes scripts estão definidos no `package.json`:

- `dev`: Inicia o servidor de desenvolvimento com Vite.
- `build`: Compila o projeto para produção (TypeScript + Vite build).
- `lint`: Executa o ESLint para verificar o código.
- `preview`: Visualiza a build de produção localmente.
- `test`: Executa os testes com Vitest em modo watch.
- `test:run`: Executa os testes uma vez.
- `test:ui`: Executa os testes com interface gráfica.
- `test:watch`: Executa os testes em modo watch.
- `test:coverage`: Executa os testes e gera relatório de cobertura.

## Instalação

1. Certifique-se de ter o Node.js e pnpm instalados.
2. Clone o repositório.
3. Instale as dependências:

   ```bash
   pnpm install
   ```

## Uso

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

Para construir a aplicação para produção:

```bash
pnpm build
```

Para executar os testes:

```bash
pnpm test
```

# apresenta-o
# apresenta-o
