document.body.style.fontFamily = "arial"

/* L02e01 - Criar e inserir um parágrafo*/
let paragrafo = document.createElement("p");
paragrafo.className = "info";
paragrafo.textContent = "Texto incluído com JS";

document.body.appendChild(paragrafo)

/* L02e02 - Adicionar imagem com atributos*/

let imagem = document.createElement("img");
imagem.id = "img1";
imagem.alt = "Mensagem alt para imagem"
imagem.src = 'https://s2.glbimg.com/EmYI4DMFAB122_E6-ZwTYuseVHQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/8/7/Qfc79KRmmy4rXFiTNvLA/2018-10-18-golgt.jpg';
document.body.appendChild(imagem);
document.getElementById("img1").width = 400;
document.getElementById("img1").height = 300;

/* L02e03 -  Lista dinâmica de frutas*/

let lista = document.createElement("ul");
document.body.appendChild(lista)


let li1 = document.createElement("li");
li1.textContent = "Maçã";
lista.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "Banana";
lista.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Uva";
lista.appendChild(li3);

/* L02e04 -  Criar botão estilizado*/

let botaoAzul = document.createElement("button");
document.body.appendChild(botaoAzul)
botaoAzul.textContent = "Clique Aqui";
botaoAzul.id = "botaoAzul"
document.getElementById("botaoAzul").style.background = "#2196F3";
document.getElementById("botaoAzul").style.color = "#ffffff";
document.getElementById("botaoAzul").style.border = "none";
document.getElementById("botaoAzul").style.borderRadius = "20px";
document.getElementById("botaoAzul").style.paddingRight = "16";
document.getElementById("botaoAzul").style.paddingLeft = "16";
document.getElementById("botaoAzul").style.paddingTop = "8";
document.getElementById("botaoAzul").style.paddingBottom = "8";

/* L02e05 -  Seção com título e parágrafo*/
 let secao = document.createElement("section");
 let titulo2 = document.createElement("h2");
 let paragrafo2 = document.createElement("p");
titulo2.textContent = "Gol Quadrado";
paragrafo2.textContent = "Na imagem é exibido um gol quadrado preto";
secao.appendChild(titulo2);
secao.appendChild(paragrafo2);
document.body.appendChild(secao);

/* L02e06 -  Injetar um link com setAttribute*/

let linkCompra = document.createElement("a");
linkCompra.textContent = "Compre clicando aqui";
linkCompra.href = "https://carro.mercadolivre.com.br/MLB-4034705705-gol-quadrado-1986-novo-18-_JM?highlight=false&headerTopBrand=false#polycard_client=search-nordic&position=7&search_layout=grid&type=item&tracking_id=4a484906-91a3-49f0-8fec-60726bfc27fb"
linkCompra.target="_blank"
document.body.appendChild(linkCompra);

/* L02e08 -  Criar um card de perfil*/

let container = document.createElement("div");
document.body.appendChild(container)
let card = document.createElement("div");
container.appendChild(card)
card.style.padding= "10";
card.style.marginTop= "10";
card.style.border= "1px solid #b3b3b3"
card.style.borderRadius= "10px";
card.style.width = 240;
card.style.display= "inline-block";
card.style.textAlign="center";



let imagem2 = document.createElement("img");
card.appendChild(imagem2);
imagem2.src = 'https://s2.glbimg.com/EmYI4DMFAB122_E6-ZwTYuseVHQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/8/7/Qfc79KRmmy4rXFiTNvLA/2018-10-18-golgt.jpg';
imagem2.width = 230;
imagem2.height = 150;

let tituloCard = document.createElement("h2");
tituloCard.textContent = "Gol Quadrado"
card.appendChild(tituloCard)
 let descricao = document.createElement("p");
 descricao.textContent = "Gol quadrado Preto, 96, duas portas, ar-condicionado e vidros eletricos"
 card.appendChild(descricao)