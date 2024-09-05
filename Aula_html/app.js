function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   

    // Inicializa uma string para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre os dados e cria elementos HTML para cada resultado
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informacoes</a>
            </div>
        `;
    }

    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
}
