# Template Front-End com Next.js

Este repositório contém um template completo para o desenvolvimento de aplicações front-end utilizando **Next.js**. Ele foi projetado para ser uma base sólida para projetos modernos, com foco em desempenho, escalabilidade e boas práticas de desenvolvimento.

---

## 📂 Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a navegação e o desenvolvimento. Abaixo está uma visão geral dos principais diretórios e arquivos:
emplate/ ├── .gitignore ├── eslint.config.mjs ├── jsconfig.json ├── next.config.mjs ├── package.json ├── README.md ├── public/ │ ├── favicon.ico │ └── imagens/ ├── src/ │ ├── app/ │ │ ├── globals.css │ │ ├── layout.jsx │ │ ├── page.jsx │ │ ├── page.module.css │ ├── components/ │ │ ├── Welcome/ │ │ │ ├── Welcome.jsx │ │ │ └── Welcome.module.css │ │ ├── Props/ │ │ │ ├── Props.jsx │ │ │ └── Props.module.css │ │ ├── Children/ │ │ │ ├── Children.jsx │ │ │ └── Children.module.css │ │ └── Dad/ │ │ ├── Dad.jsx │ │ └── Dad.module.css

### 📁 Diretórios Principais

- **`public/`**: Contém arquivos estáticos, como imagens, ícones e outros recursos que podem ser acessados diretamente pelo navegador.
- **`src/app/`**: Diretório principal da aplicação, onde estão os arquivos de configuração, estilos globais e as páginas principais.
- **`src/components/`**: Diretório que agrupa os componentes reutilizáveis, organizados por funcionalidade.

---

## 🛠️ Tecnologias Utilizadas

Este template foi construído utilizando as seguintes tecnologias e ferramentas:

- **[Next.js](https://nextjs.org/)**: Framework React para renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS Modules**: Para estilização modular e escopada, garantindo que os estilos sejam aplicados apenas aos componentes desejados.
- **ESLint**: Configurado para garantir a qualidade do código e seguir boas práticas.
- **JavaScript (ES6+)**: Utilização de recursos modernos da linguagem para maior legibilidade e eficiência.

---

## 🚀 Funcionalidades do Template

Este template foi projetado para oferecer uma base sólida para o desenvolvimento de aplicações front-end. Algumas das principais funcionalidades incluem:

1. **Configuração Inicial Pronta**:

   - Configuração de ESLint para garantir a qualidade do código.
   - Suporte a CSS Modules para estilização modular.
   - Estrutura de diretórios organizada para facilitar a escalabilidade.

2. **Componentes Reutilizáveis**:

   - Componentes pré-configurados para reutilização em diferentes partes do projeto.
   - Exemplos de componentes com propriedades (`Props`) e uso de `children`.

3. **Estilização Modular**:

   - Cada componente possui seu próprio arquivo CSS Module, garantindo isolamento de estilos.

4. **Aliases para Importação**:

   - Configuração de aliases no arquivo `jsconfig.json` para facilitar a importação de arquivos e componentes.

5. **Pronto para Produção**:
   - Configuração otimizada para build de produção com Next.js.

---

