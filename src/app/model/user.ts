import { Telefone } from './telefone';
import { Profissao } from './profissao';

export class User {
    id: Number;
    login: String;
    senha: String;
    nome: String;
    cpf: String;
    telefones: Array<Telefone>;
    dataNascimento: String;
    profissao: Profissao = new Profissao();
    salario: DoubleRange;
}

