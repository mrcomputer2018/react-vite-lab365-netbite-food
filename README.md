Projeto **NextBite Food Delivery**.

---

````md
# 🍔 NextBite Food

**NextBite Food** é um aplicativo web de delivery criado com **ReactJS**, **Vite**, **TypeScript**, **TailwindCSS v4**, **shadcn/ui** e outras bibliotecas modernas. Este projeto está sendo desenvolvido especialmente para os **alunos e ex-alunos do Lab365**, como parte das aulas do **Grupo de Estudo de React** da comunidade lab365 no Discord.

Nosso objetivo é proporcionar uma experiência de aprendizado prática e moderna, utilizando tecnologias do mercado para criar um produto real, funcional e com ótima usabilidade.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia         | Motivo da Escolha                                                                     |
| ------------------ | ------------------------------------------------------------------------------------- |
| **ReactJS**        | Biblioteca moderna, declarativa e baseada em componentes, ideal para SPAs.            |
| **Vite**           | Build tool ultrarrápido com excelente experiência de desenvolvimento.                 |
| **TypeScript**     | Tipagem estática que aumenta a confiabilidade e produtividade no código.              |
| **TailwindCSS v4** | Utilitário de CSS moderno com suporte à nova engine "Oxide", mais rápido e eficiente. |
| **shadcn/ui**      | Componentes acessíveis e customizáveis baseados em Tailwind e Radix UI.               |
| **React Router**   | Gerenciamento de rotas simples e eficaz em aplicações React.                          |
| **Lucide Icons**   | Conjunto moderno de ícones SVG.                                                       |
| **Zustand**        | Gerenciamento de estado leve e fácil de usar.                                         |

---

## 💡 Objetivo Educacional

Este projeto tem como propósito:

-   Ensinar boas práticas com React moderno.
-   Aplicar conceitos de design system utilizando TailwindCSS e shadcn/ui.
-   Trabalhar em equipe simulando um ambiente real de desenvolvimento.
-   Aprender a lidar com problemas reais de integração, dependências e versionamento.

---

## ⚠️ Problemas Comuns e Como Resolver

### 1. **Erro de tipagem com bibliotecas externas**

> **Exemplo:** `Property 'X' does not exist on type...`

-   💡 **Solução:** Verifique se a biblioteca tem suporte oficial a TypeScript. Caso contrário, instale os tipos manualmente com `@types/nome-da-biblioteca`.

---

### 2. **TailwindCSS v4 quebrando estilos após atualização**

> Tailwind 4 usa a nova engine `Oxide`, o que pode gerar conflitos com plugins ou ferramentas antigas.

-   💡 **Solução:** Verifique se todas as dependências estão atualizadas e compatíveis com a v4.
-   Dica: rode `npx tailwindcss --help` para verificar se o Tailwind está compilando corretamente.

---

### 3. **shadcn/ui não funcionando como esperado**

> Componentes sem estilo ou comportamento estranho.

-   💡 **Solução:**
    -   Certifique-se de que o `tailwind.config.ts` está com as configurações corretas (inclusive os temas e paths de conteúdo).
    -   Execute `npx shadcn-ui@latest init` para iniciar corretamente o projeto com as configurações sugeridas.

---

### 4. **Rotas quebradas**

> Navegação ou fallback não funcionando.

-   💡 **Solução:** Confirme se o `RouterProvider` e as rotas foram configuradas corretamente. Para aplicações Vite + React Router, use sempre `BrowserRouter` com rotas encapsuladas e o fallback adequado.

---

## 🧠 Como Contribuir

1. Faça um fork do repositório.
2. Crie uma nova branch com sua feature ou correção.
3. Envie um PR explicando o que foi feito.
4. Participe ativamente dos estudos no grupo do Discord!

---

## 📁 Estrutura do Projeto

```bash
src/
├── components/       # Componentes reutilizáveis com shadcn/ui
├── pages/            # Páginas principais do app
├── routes/           # Definições de rotas
├── store/            # Zustand store
├── hooks/            # Hooks personalizados
├── assets/           # Imagens e ícones
└── utils/            # Funções utilitárias
```
````

---

## 🛠️ Scripts

```bash
npm install        # Instala as dependências
npm run dev        # Inicia o servidor local com Vite
npm run build      # Gera a versão de produção
```

---

## 📌 Requisitos

-   Node.js >= 18
-   npm ou yarn
-   Editor com suporte a TypeScript (VSCode recomendado)

---

## 🤝 Agradecimentos

A todos os participantes da comunidade do Discord do Lab365, que estão tornando este projeto possível com entusiasmo e colaboração.

---

**Bora codar e aprender juntos! 🚀**

```

---

Se quiser que eu adicione badges, imagens, exemplos de UI ou instruções de deploy futuramente (Vercel, Netlify etc), posso complementar!
```
