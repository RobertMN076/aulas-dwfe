interface ModeloAluno{
    matricula: number;
    nome:string;
}

function LogAluno({nome = 'Robert', matricula = 123}: ModeloAluno) {
    return (target:any) => {
        console.log(nome);
        console.log(matricula);
    }
}

@LogAluno({})
class Aluno {
}


let exemplo = new Aluno