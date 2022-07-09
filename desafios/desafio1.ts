// Como podemos rodar isso em um arquivo .ts sem causar erros? 
let employee: {
  code: 10,
  name: 'John'
};

const employee2: { code: number,  name: string } = { 
  code: 10,
  name: 'John'
}

type employee3 = {
  code: number,
  name: string
}

const funcnionario: employee3 = {
  code: 10,
  name: 'Jphn'
}
