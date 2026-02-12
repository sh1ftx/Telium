# Telium: Sistema de Gestão de Tarefas (Task Manager)

## Documentação técnica acadêmica orientada por normas de engenharia de software  

Projeto desenvolvido para fins **didáticos e avaliativos** na disciplina *Tópicos Especiais em Programação*  
Instituição: IFPI (Instituto Federal do Piauí) – Campus Pedro II  
Docente responsável: Anderson dos Reis Barros  

---

## Identidade Conceitual do Projeto

O nome **Telium** deriva do termo filosófico **Telos (Telos – finalidade, propósito ou causa final)**, conceito central na filosofia clássica, especialmente na tradição aristotélica.

Na filosofia de Aristóteles, *telos* representa o fim último para o qual algo existe ou é realizado. Trata-se da ideia de que toda ação, processo ou entidade possui um propósito intrínseco que orienta sua existência.

Conforme Aristóteles afirma em *Metafísica*:

> “O fim (telos) é aquilo em vista do qual algo é feito.”  
> — Aristóteles

E ainda:

> “Todo agente age em vista de um fim.”  
> — Aristóteles

Dessa forma, o **Telium** simboliza um sistema orientado a objetivos: organizar tarefas para alcançar finalidades definidas. O nome reforça o princípio de que toda atividade (task – tarefa) deve possuir direção, propósito e conclusão — conceito que dialoga diretamente com a Engenharia de Software, onde sistemas são construídos para atender requisitos específicos.

---

## 👥 Equipe e Atribuições

- Kayky Rodrigues Silva: Organização arquitetural e estruturação do backend.
- Kayki Ivan de Sousa Pereira: Modelagem do banco de dados e integração Full Stack.
- Fernando da Silva Sena: Implementação de validações e testes funcionais.
- Gleison de Oliveira Sousa: Desenvolvimento dos endpoints REST.
- Vinycius Huellyson de Sousa Alves: Implementação da interface React e integração com Axios.

---

## Informações do Projeto

![status](https://img.shields.io/badge/status-concluído-9AD0C2?style=for-the-badge)
![tipo](https://img.shields.io/badge/tipo-projeto%20acadêmico-CDB4DB?style=for-the-badge)
![arquitetura](https://img.shields.io/badge/arquitetura-Client--Server%20Full%20Stack-B8C0FF?style=for-the-badge)
![normas](https://img.shields.io/badge/normas-IEEE%20%7C%20ISO/IEC-A0C4FF?style=for-the-badge)

---

## Tecnologias e Ferramentas

![Node.js](https://img.shields.io/badge/Node.js-18.x-A7C957?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-DAD7CD?style=for-the-badge&logo=express&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-8.x-BBD0FF?style=for-the-badge&logo=mysql&logoColor=black)
![React](https://img.shields.io/badge/React-18.x-CAF0F8?style=for-the-badge&logo=react&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-HTTP-EAE4E9?style=for-the-badge)

---

## Recursos Implementados

![CRUD](https://img.shields.io/badge/operações-CRUD-BEE1E6?style=for-the-badge)
![REST](https://img.shields.io/badge/API-REST-FFD6A5?style=for-the-badge)
![Validação](https://img.shields.io/badge/validação-frontend%20%7C%20backend-DEC9E9?style=for-the-badge)
![Integridade](https://img.shields.io/badge/integridade-referencial-E5989B?style=for-the-badge)

## 1. Contexto acadêmico e propósito  

O Telium foi concebido como instrumento pedagógico para consolidação prática da arquitetura Cliente–Servidor e do modelo Full Stack (Full Stack – Desenvolvimento completo envolvendo frontend e backend).

O projeto segue diretrizes da ISO/IEC/IEEE 12207 (ISO/IEC/IEEE 12207 – Software Life Cycle Processes), aplicando de forma proporcional processos do ciclo de vida de software.

Não se trata de produto industrial, mas de artefato educacional destinado a:

- aplicar conceitos teóricos em ambiente controlado;
- exercitar separação entre frontend e backend;
- implementar persistência real em SGBD (Sistema Gerenciador de Banco de Dados);
- produzir documentação alinhada a normas técnicas.

---

## 2. Stack tecnológica utilizada  

### Backend

**Node.js (Node.js – Ambiente de execução JavaScript baseado no motor V8)**  
Responsável por executar código JavaScript no lado do servidor, utilizando arquitetura orientada a eventos e I/O não bloqueante (Non-Blocking I/O – Entrada/Saída não bloqueante).

**Express.js (Express.js – Framework minimalista para APIs REST)**  
Gerencia rotas (routes – Rotas), middlewares (middlewares – Funções intermediárias de requisição) e estrutura da API REST (API REST – Application Programming Interface baseada em Representational State Transfer).

**MySQL (MySQL – Sistema Gerenciador de Banco de Dados Relacional)**  
Responsável pela persistência relacional com uso de:

- PK (Primary Key – Chave Primária);
- FK (Foreign Key – Chave Estrangeira);
- Integridade referencial.

**CORS (CORS – Cross-Origin Resource Sharing)**  
Permite requisições entre diferentes origens dentro do protocolo HTTP (HTTP – HyperText Transfer Protocol).

---

### Frontend

**React.js (React.js – Biblioteca para construção de Interface de Usuário)**  
Baseado em componentes reutilizáveis e gerenciamento de estado (state – Estado).

**SPA (SPA – Single Page Application)**  
Aplicação de página única com navegação dinâmica sem recarregamento completo.

**Axios (Axios – Cliente HTTP baseado em Promises)**  
Realiza requisições assíncronas ao backend.

**Styled Components (Styled Components – CSS-in-JS)**  
Permite encapsular CSS (CSS – Cascading Style Sheets) dentro de componentes JavaScript.

**React Toastify (React Toastify – Biblioteca de notificações visuais)**  
Exibe mensagens de feedback ao usuário.

---

## 3. Escopo do sistema  

O sistema contempla gestão de Usuários e Tarefas, permitindo:

- operações CRUD (CRUD – Create, Read, Update, Delete);
- associação de tarefas a usuários via FK (Foreign Key – Chave Estrangeira);
- validação de dados em frontend e backend;
- comunicação estruturada por API REST.

---

## 4. Fundamentação normativa adotada  

### IEEE 830 – Especificação de Requisitos  

IEEE 830 (IEEE 830 – Software Requirements Specification) estabelece que requisitos devem ser claros, verificáveis e rastreáveis.

### IEEE 1016 – Descrição de Design  

IEEE 1016 (IEEE 1016 – Software Design Description) orienta a documentação arquitetural e modular.

### ISO/IEC 25010 – Modelo de Qualidade  

ISO/IEC 25010 (ISO/IEC 25010 – Systems and Software Quality Models) aborda:

- Adequação funcional;
- Usabilidade;
- Manutenibilidade.

### ISO/IEC/IEEE 12207 – Ciclo de Vida  

Define processos de análise, projeto, implementação, verificação e manutenção.

---

## 5. Arquitetura do sistema  

Modelo Client–Server Full Stack estruturado em três camadas:

### Backend – API REST  

Responsável por:
- Lógica de negócio;
- Validação de dados;
- Controle de integridade;
- Comunicação HTTP;
- Retorno em JSON (JSON – JavaScript Object Notation).

### Frontend – SPA  

Responsável por:
- Interface gráfica;
- Renderização dinâmica;
- Gerenciamento de estado;
- Comunicação assíncrona via Axios.

### Banco de Dados – MySQL  

Responsável por:
- Persistência relacional;
- Implementação de PK e FK;
- Garantia de integridade referencial.

---

## 6. Requisitos Funcionais  

### RF-01 — Gestão de Usuários  

Criar, listar, atualizar e remover usuários com Nome, Email e Telefone.

### RF-02 — Gestão de Tarefas  

Associar tarefas a usuários específicos via chave estrangeira.

### RF-03 — Validação de Dados  

- Validação sintática de e-mail;
- Restrição de caracteres não numéricos no telefone;
- Verificação dupla (frontend e backend).

---

## 7. Organização do projeto  

```
.
├── api/
│   ├── controller/
│   ├── routes/
│   ├── db.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── Modules/
│   │   ├── services/
│   │   └── styles/
├── README.md
└── package.json
```

### Descrição estrutural

- **controller/**: Lógica de negócio.
- **routes/**: Definição de endpoints REST.
- **db.js**: Configuração de conexão com MySQL.
- **index.js**: Inicialização do servidor.
- **services/**: Comunicação HTTP via Axios.
- **Modules/**: Componentes React organizados por domínio.
- **styles/**: Estilização com Styled Components.

---

## 8. Considerações finais  

O Telium representa a aplicação integrada de conceitos de Engenharia de Software, Arquitetura Cliente–Servidor e Desenvolvimento Full Stack em ambiente acadêmico.

Consolida práticas como:

- Separation of Concerns (Separação de Responsabilidades);
- Modularização;
- Documentação normativa;
- Aplicação proporcional de padrões IEEE e ISO.

---

## Referências (ABNT)

ARISTÓTELES. *Metafísica*. Tradução de Edson Bini. Bauru: EDIPRO, 2006.

ARISTÓTELES. *Ética a Nicômaco*. Tradução de Antonio de Castro Caeiro. São Paulo: Atlas, 2009.

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO/IEC 25010:2011 – Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models**. Geneva, 2011. Disponível em: https://www.iso.org/standard/35733.html

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION; INTERNATIONAL ELECTROTECHNICAL COMMISSION; IEEE. **ISO/IEC/IEEE 12207:2017 – Systems and software engineering — Software life cycle processes**. Geneva, 2017. Disponível em: https://www.iso.org/standard/63712.html

IEEE. **IEEE Std 830-1998 – Recommended Practice for Software Requirements Specifications**. New York, 1998.

IEEE. **IEEE Std 1016-2009 – IEEE Standard for Information Technology—Systems Design—Software Design Descriptions**. New York, 2009.
