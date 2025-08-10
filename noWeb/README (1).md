
# 🚀 Noweb Test – Landing Page + Integração ViaCEP
Este projeto foi desenvolvido como parte do teste técnico para vaga de Desenvolvedor Front-End na Noweb.
O objetivo é reproduzir com fidelidade o layout fornecido no Figma, aplicar responsividade mobile (mesmo sem layout específico) e integrar uma funcionalidade extra com consumo da API pública do ViaCEP para busca de endereços a partir do CEP.

Alem disso, na pagina inicial foi aplicado um design interativo, com efeitos de hover em botões, containers e elementos interativos, para melhorar a experiência do usuário.

Ao clicar no botão verde presente na página inicial no menu, é aberto um modal interativo onde o usuário pode digitar um CEP (com ou sem traço).
Os dados são buscados automaticamente na API e exibidos no modal, com os campos preenchidos bloqueados para edição.
O modal permanece aberto para permitir múltiplas pesquisas sem recarregar a página.


## 🛠️ Tecnolgias Utlizadas

- React – Biblioteca principal para construção da interface.
- TypeScript – Tipagem estática para maior robustez do código.
- Tailwind CSS – Estilização rápida e responsiva.
- CSS – Ajustes finos e personalizações adicionais.
- API ViaCEP – Consumo de dados de endereço a partir do CEP.

## ⚙️ Funcionalidades 

- Fidelidade ao layout Figma com atenção a espaçamentos, cores e tipografia.
- Responsividade para diferentes tamanhos de tela.
- Interatividade com efeitos de hover em botões e elementos interativos.

- Busca de Endereço por CEP:
- Aceita CEP com ou sem traço (03323000 ou 03323-000).
- Consome a API pública do ViaCEP.
- Preenche automaticamente:
Logradouro /
Complemento /
Bairro /
UF /
Estado

- Campos preenchidos ficam bloqueados para edição.
- Modal de busca que permite múltiplas pesquisas sem recarregar a página.

# 🌐 API Utilizada
ViaCEP – API pública para consulta de endereços brasileiros.

Documentação: https://viacep.com.br

Exemplo de requisição: https://viacep.com.br/ws/03323000/json/


## 📌 Observações
Estrutura com componentização para fácil manutenção.
Uso de estado global/local para controle do modal e dos dados do CEP.
Tratamento de erros para CEPs inválidos ou não encontrados.

## 👨‍💻 Autor

- 📧 Email: [gabrielleandrosantiago9@gmail.com]()
- 💼 Linkedin: [@GabrielLeandro](https://www.linkedin.com/in/gabrielmsantiago/)
- 📂 GitHub: [@gabrielsantiag0](https://github.com/gabrielsantiag0/gabrielsantiag0)

