const estados = {

    SP: [
        "São Paulo",
        "Guarulhos",
        "Campinas",
        "São Bernardo do Campo",
        "Sorocaba"
    ],

    RJ: [
        "Rio de Janeiro",
        "São Gonçalo",
        "Duque de Caxias",
        "Nova Iguaçu",
        "Niterói"
    ],

    MG: [
        "Belo Horizonte",
        "Uberlândia",
        "Contagem",
        "Juiz de Fora",
        "Betim"
    ],

    PR: [
        "Curitiba",
        "Londrina",
        "Maringá",
        "Ponta Grossa",
        "Cascavel"
    ],

    BA: [
        "Salvador",
        "Feira de Santana",
        "Vitória da Conquista",
        "Camaçari",
        "Juazeiro"
    ]

};

const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");

estado.addEventListener("change", function () {

    cidade.innerHTML = '<option value="">Selecione uma cidade</option>';

    const lista = estados[estado.value];

    if (!lista) {
        return;
    }

    lista.forEach(function (nomeCidade) {

        const option = document.createElement("option");

        option.value = nomeCidade;
        option.textContent = nomeCidade;

        cidade.appendChild(option);

    });

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert(`😎 ${nome}, farmou aura ao utilizar esse formulário.`);

});