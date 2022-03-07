## Projeto Loja Acme Inc.

### Intruções:
Após clonar o repositório e ir para o seu diretório, deve-se baixar as dependências do projeto:

    yarn


Para executá-lo em produção basta digitar o seguinte comando:

    yarn dev

E por fim, acessar a url http://localhost:3000/

Caso deseje gerar um build:

    yarn build


### Hospedagem:

Este projeto está hospedado na Vercel. Ao realizar um commit & push, automaticamente é gerado uma nova build e deploy automaticamente pela Vercel.

### Lista de tecnologias / dependências utilizadas:

- Next.js
- Typescript
- Tailwind CSS
- ESLint
- Prettier
-  Axios
-  react-hot-toast
- react-Icons


### Desafio:

Projeto desenvolvido com o objetivo de atender as seguintes demandas:

● Páginas:
- Uma página inicial, que deverá mostrar uma lista de produtos da Acme;
- Uma página do produto, que deverá ser acessada ao clicar em um desses
produtos da tela inicial;
- Uma página de “carrinho”, que pode ser acessada através de qualquer outra
página do seu sistema;

● Funcionalidades:
 - Possibilidade de selecionarmos produtos como “favoritos”, em ambas as páginas.
- Possibilidade de, na página inicial, filtrar produtos pelo status “favorito” ou pelo nome do produto
- Possibilidade de adicionar e remover itens do carrinho (carrinho e favorito são duas coisas diferentes!)
- Possibilidade de realizar o “checkout” do seu carrinho, o que deverá gerar um JSON com a lista de produtos que estavam no carrinho no momento do checkout e também trazer quaisquer informações da sessão do usuário que considere relevante.

●  Produtos:
 - Para este exercício, iremos utilizar uma biblioteca aberta que disponibiliza
imagens geradas randomicamente. Para este fim, use a seguinte API aberta: [link](https://picsum.photos/).
 - Você deverá garantir que a imagem dos itens não se altere ao longo da
navegação em sua ferramenta.
 - Para o conteúdo de cada item, como nome, descrição e valor unitário, segue a regra:
 - Para nome do produto: Um conjunto de Verbo + Adjetivo gerado
   aleatoriamente (sem repetir) seguindo as listas de verbos e adjetivos
   presentes ao fim deste arquivo.
- Para descrição: Um texto randômico de sua escolha de 20 a 500
caracteres
- Para valor, a seguinte pseudo-fórmula: 10 + nameLength * ((500 - descrLength) / (3 - nameLength))
