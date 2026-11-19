const memes = [
    {
        nome: "Doge",
        categoria: "Cachorro"
    },
    {
        nome: "Grumpy Cat",
        categoria: "Gato"
    },
    {
        nome: "Surprised Pikachu",
        categoria: "Reação"
    },
    {
        nome: "Distracted Boyfriend",
        categoria: "Reação"
    },
    {
        nome: "Chaves Desesperado",
        categoria: "Brasileiro"
    }
]

const formulario = document.getElementById("formMeme")
const campoNome = document.getElementById("nome")
const campoCategoria = document.getElementById("categoria")
const corpoTabela = document.getElementById("corpoTabela")

function exibir() {
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < memes.length; posicao++) {

        const meme = memes[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao + 1}º</td>
                <td>${meme.nome}</td>
                <td>${meme.categoria}</td>
            </tr>
        `
    }
}

exibir();

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const meme = {
        nome: campoNome.value,
        categoria: campoCategoria.value
    }

    memes.push(meme)

    exibir()

    formulario.reset()
    campoNome.focus()
})