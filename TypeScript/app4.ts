import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
import { PessoaDao } from './PessoaDao'
import Pessoa from './Pessoa'

let dao: ConcessionariaDao= new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])

dao.inserir(concessionaria)

let pessoaDao : PessoaDao = new PessoaDao()
let pessoa : Pessoa = new Pessoa('', '')

pessoaDao.atualizar(pessoa)