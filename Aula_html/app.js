function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado, digite algo para pesquisar</p>" 
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e cria elementos HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informacoes</a>
            </div>
        `;
        }
        
        
        
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado</p>"
    }

    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
}
