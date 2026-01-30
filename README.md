📦 Calculadora 3D

Calculadora web para precificação de impressões 3D, desenvolvida em React, com foco em organização, separação de responsabilidades e facilidade de evolução da interface e das regras de negócio.

🚀 Objetivo do Projeto

A Calculadora 3D tem como objetivo ajudar makers e negócios de impressão 3D a:

Calcular custo de material

Calcular custo operacional (máquina + energia)

Incluir tempo de pós-processamento

Aplicar margem de lucro

Incluir taxas (ICMS, ISS, marketplace)

Calcular kits com desconto

Arredondar preços

Gerar valores finais unitários e por kit

Tudo isso com uma interface moderna e fácil de manter.

🧱 Stack

⚛️ React

⚡ Vite

🟨 JavaScript (ES6+)

🎨 CSS / (futuro: layout vindo do Figma)

📁 Estrutura do Projeto
src/
 ├ constants/           # Dados fixos usados pela UI (selects, defaults)
 │   ├ energyCosts.js
 │   ├ icmsRates.js
 │   ├ machines.js
 │   ├ materialMultipliers.js
 │   └ marketplaces.js
 │
 ├ services/
 │   └ calculator/      # Regra de negócio (pura, sem UI)
 │      ├ material.js
 │      ├ operational.js
 │      ├ taxes.js
 │      ├ rounding.js
 │      └ calculatePro.js
 │
 ├ App.jsx              # Orquestra UI + estado + cálculo
 ├ main.jsx
 └ index.css

📌 Conceito da Arquitetura

constants → apenas dados da interface

services → cálculo puro (não conhece React)

components / App → interface + estado

UI não contém regra de negócio

Isso garante que layout, lógica e dados não fiquem acoplados.

🧠 Fluxo de Funcionamento
Usuário → Interface (React)
       → Estado (useState)
       → calculatePro()
       → Resultado
       → Renderização na tela


Não existe backend neste projeto: todo o cálculo acontece no navegador.

▶️ Rodando o projeto localmente

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo


Instale as dependências:

npm install


Inicie o servidor:

npm run dev


Abra no navegador:

http://localhost:5173

🧪 Exemplo de uso do cálculo
import { calculatePro } from "./services/calculator/calculatePro";

const result = calculatePro({
  weight: 350,
  pricePerKg: 69.99,
  printHours: 4,
  postProcessHours: 1,
  hourlyRate: 40,
  energyCostPerKwh: 0.72,
  machineHourlyCost: 1.2,
  machineEfficiency: 1.0,
  materialType: { multiplier: 0.8 },
  profit: 40,
});

🎨 Interface

O layout será criado no Figma e convertido para componentes React.
A lógica já está preparada para receber qualquer UI sem alterar as regras de negócio.

📄 Licença

Projeto de uso livre para estudo e evolução.