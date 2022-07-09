const pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissao: 'desenvolvedora',
}

const andre: {nome: string, idade: number, profissao: string} = {
  nome: 'Andre',
  idade: 17,
  profissao: 'pintor',
}

const paula: {nome: string, idade: number, profissao: string} = {
  nome: 'Paula',
  idade: 25,
  profissao: 'Desenvolvedora',
}

enum Profissao{
  Professora,
  Desenvolvedora,
  Atriz,
  JogadorDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 37,
  profissao: Profissao.Desenvolvedora,
}

interface Estudante extends Pessoa{
  materia: string[];
}

const jessica: Estudante  = {
  nome: 'Jessica',
  idade: 24,
  profissao: Profissao.Atriz,
  materia: ['Matemática','Português','Programação'],
}

function listar(lista: string[]){
  for(const item of lista){
    console.log('- ',item);
  }
}

listar(jessica.materia);