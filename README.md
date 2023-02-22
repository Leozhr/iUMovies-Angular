# ••• IUMovies •••

**`HTML, CSS, TYPESCRIPT, ANGULAR`**

O Projeto consiste em catálogos dos melhores filmes populares, ranqueados e lançamentos, onde o usuário pode selecionar e ver todas as características do filme, como nota, descrição, atores e até mesmo pôsteres.

O site foi desenvolvido em Angular, com uma estrutura de desenvolvimento web que permite criar interfaces de usuário dinâmicas e interativas. Isso significa que você pode esperar uma navegação fluida, carregamento rápido de páginas e uma interface de usuário intuitiva, os dados foram consumidos através do HttpClient, utilizando a API da TMDB.
 
   <a href="https://iumovies.vercel.app/home/main" target="_blank"><img src="https://img.shields.io/badge/-Clique Aqui para acessar o Projeto-990000?style=for-the-badge&logo=vercel&logoColor=white" target="_blank"></a>
   
<br/>
 
 ## 🚀 Resultados 
 <br/>
 
  <div align="center">
    <img width="400px" src="https://user-images.githubusercontent.com/117487925/220699122-718db107-b677-41ac-bbf6-890d1054ac5d.png" />
    <img width="400px" src="https://user-images.githubusercontent.com/117487925/220699132-c64a105e-da9f-43f2-a49d-dc21de9ab682.png" />
  </div>
  
 <br/>
  
• Bem-vindo ao nosso projeto sobre filmes! Aqui você encontrará uma lista diversificada de filmes, desde clássicos atemporais até os mais recentes lançamentos. Este repositório foi criado com o objetivo de ajudar pessoas a encontrarem novos filmes para assistir.

• A lista de filmes é organizada por gênero e cada filme inclui informações como atores principais, a sinopse e a avaliação do IMDb. Além disso, você pode filtrar os filmes por populares, ranqueados ou lançamentos.

• Este projeto é uma ótima maneira de compartilhar e descobrir novos filmes com a comunidade GitHub. Sinta-se à vontade para contribuir, fazendo sugestões ou relatando problemas. Agradecemos sua participação e esperamos que você encontre muitos filmes incríveis para assistir!
  
<br/>

## 💡 Construção
> O Projeto foi criado 100% utilizando Angular 

<br/>

• Este projeto foi construído com Angular, uma plataforma poderosa e flexível que permite criar aplicativos da web escaláveis e de alto desempenho. O uso de Angular nos permite fornecer uma experiência de usuário mais rápida e fluida, além de oferecer recursos avançados, como roteamento, detecção de alterações e injeção de dependência.

#

### `Estrutura no Angular (Organização)`

 <img width="400px" src="https://user-images.githubusercontent.com/117487925/220711234-42b47988-7d3c-4a6f-a80a-0aea60109428.png" />


• Dentro da pasta "app", temos uma estrutura de pastas que segue a lógica do aplicativo. Por exemplo:

"global": Esta pasta contém os pipes personalizados que são usados pelo aplicativo e tambem funções reutilizaveis.

"services": Esta pasta contém todos os serviços usados para consumir os dados da API da TMDB.

"models": Esta pasta contém todos os modelos reutilizaveis em todas as paginas, como header, menu, rodapé.

"pages": Esta pasta contém os componentes que representam as diferentes páginas do aplicativo.

Ao seguir essa estrutura de pastas, tornei o projeto mais organizado e fácil de manter. Esperamos que isso facilite o desenvolvimento de novos recursos e a solução de problemas.

#

<br/>

### `Rotas no Angular`

 <img width="500px" src="https://user-images.githubusercontent.com/117487925/220714997-2975673c-69a3-4671-894a-ce4c34f780cf.png" />

• O roteamento é baseado no módulo "RouterModule" do Angular, que fornece uma maneira fácil e poderosa de definir as rotas do aplicativo. Para configurar o roteamento, temos um arquivo "app-routing.module.ts" na pasta "app" do nosso projeto.

• Nesse arquivo, definimos as rotas do nosso aplicativo usando o método "RouterModule.forRoot()". Cada rota é definida com um objeto que contém o caminho da rota e o componente correspondente que será exibido quando a rota for acessada. Além disso, podemos definir parâmetros opcionais ou obrigatórios e até mesmo criar rotas aninhadas.

• Para tornar a navegação do usuário mais eficiente, também definimos um sistema de navegação com base em parâmetros. Por exemplo, podemos criar um link que navegue diretamente para uma página específica do aplicativo ou até mesmo passar parâmetros que serão usados para personalizar a página.

• Com essa estrutura de roteamento, tornamos a navegação do usuário mais fácil e intuitiva, ao mesmo tempo em que permitimos que o aplicativo responda dinamicamente às necessidades do usuário.

#

<br/>

### `Consumindo API Externa`

 <img width="500px" src="https://user-images.githubusercontent.com/117487925/220715932-0730ca4a-62b3-4a71-8e2a-5486478ead8e.png" />

• Os serviços e o HttpClient são recursos importantes em aplicações Angular para se comunicar com APIs externas. Com isso eu utilizei a API da The Movie Database (TMDb).

• Para utilizar a API TMDb, podemos criar um serviço no Angular que utilize o HttpClient para realizar as requisições HTTP necessárias. Por exemplo, podemos criar um serviço que faça uma requisição para obter uma lista de filmes populares, usando a URL fornecida pela API TMDb

• Além disso, para se comunicar com a API TMDb, precisamos fornecer uma chave de API (apiKey) e a URL base (baseUrl) da API. Essas informações podem ser obtidas a partir da documentação da API TMDb e devem ser fornecidas como parâmetros no serviço.

• Com o serviço criado, podemos consumi-lo em nosso componente Angular para obter os dados da API TMDb e exibi-los na tela. Por exemplo, podemos criar um componente "PopularMoviesComponent" que utilize o serviço "TmdbService" para obter a lista de filmes populares e exibi-los em uma lista.

<br/>

 ## 🏆 Creditos
 
 <h3>Leonardo Leal @ 2023</h3>
