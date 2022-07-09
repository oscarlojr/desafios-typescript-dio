"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora',
};
const andre = {
    nome: 'Andre',
    idade: 17,
    profissao: 'pintor',
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora',
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Desenvolvedora"] = 1] = "Desenvolvedora";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 37,
    profissao: Profissao.Desenvolvedora,
};
const jessica = {
    nome: 'Jessica',
    idade: 24,
    profissao: Profissao.Atriz,
    materia: ['Matemática', 'Português', 'Programação'],
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materia);
