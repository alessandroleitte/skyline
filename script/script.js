const mostrar = document.getElementById("exibir-conteudo");
const galeria = document.querySelector(".botao-galeria");
const voltar = document.querySelector(".botao-inicio");
const voltarTextos = document.querySelector(".botao-voltar");

const conteudo = document.getElementById("conteudo");
const inicio = document.getElementById("tela-inicial");
const fotos = document.getElementById("galeria");
const botoes = document.getElementById("botoes-main");

const imagens = document.querySelectorAll("#galeria img");
const destaque = document.querySelector(".destaque");
document.body.appendChild(destaque);
const imgDestaque = document.getElementById("imagem-destaque");
const botaoFechar = document.querySelector(".fechar");

let indiceAtual = 0;

mostrar.addEventListener("click", () => {
  conteudo.style.display = "block";
  inicio.style.display = "none";
  botoes.classList.add("ativo");

  setTimeout(() => {
    conteudo.style.opacity = "1";
  }, 50);

  // conteudo.scrollIntoView({behavior: "smooth"});  ESSA FUNÇÃO ROLA A TELA PARA A SESSÃO A SER EXIBIDA
  //OPÇÃO PARA ESCONDER A TELA INICIAL
});

voltar.addEventListener("click", () => {
  inicio.style.display = "flex";
  conteudo.style.display = "none";
  fotos.classList.remove("ativo");
  botoes.classList.remove("ativo");

  setTimeout(() => {
    conteudo.style.opacity = "1";
  }, 50);
});

galeria.addEventListener("click", () => {
  inicio.style.display = "none";
  conteudo.style.display = "none";
  fotos.classList.add("ativo");
  galeria.style.display = "none";
  voltarTextos.style.display = "block";

  setTimeout(() => {
    conteudo.style.opacity = "1";
  }, 50);
});

voltarTextos.addEventListener("click", () => {
  fotos.classList.remove("ativo");
  conteudo.style.display = "block";
  galeria.style.display = "block";
  voltarTextos.style.display = "none";
});

imagens.forEach((img, index) => {
  img.addEventListener("click", () => {
    indiceAtual = index;
    imgDestaque.src = img.src;
    destaque.classList.add("ativo");
  });
});

document.querySelector(".next").addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual >= imagens.length) indiceAtual = 0;
  imgDestaque.src = imagens[indiceAtual].src;
});

document.querySelector(".prev").addEventListener("click", () => {
  indiceAtual--;
  if (indiceAtual < 0) indiceAtual = imagens.length - 1;
  imgDestaque.src = imagens[indiceAtual].src;
});

botaoFechar.addEventListener("click", () => {
  destaque.classList.remove("ativo");
});
  
  document.addEventListener("keydown", (e) => {

    if (destaque.classList.contains("ativo")){
        
        if (e.key === "Escape" && destaque.classList.contains("ativo")) {
            destaque.classList.remove("ativo");
        }
        if (e.key === "ArrowLeft") {
            indiceAtual--;
            if (indiceAtual < 0) indiceAtual = imagens.length - 1;
                imgDestaque.src = imagens[indiceAtual].src;
        } else if (e.key === "ArrowRight") {
            indiceAtual++;
            if (indiceAtual >= imagens.length) indiceAtual = 0;
                imgDestaque.src = imagens[indiceAtual].src;
        }
    }
  });
