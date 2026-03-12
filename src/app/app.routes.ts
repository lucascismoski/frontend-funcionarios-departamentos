import { Routes } from '@angular/router';
import { DepartamentosPesquisa } from './departamentos-pesquisa/departamentos-pesquisa';
import { DepartamentoCadastro } from './departamento-cadastro/departamento-cadastro';
import { FuncionariosPesquisa } from './funcionarios-pesquisa/funcionarios-pesquisa';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'departamentos',
    component: DepartamentosPesquisa,
  },
  {
    path: 'departamentos/cadastro',
    component: DepartamentoCadastro,
  },
  {
    path: 'funcionarios',
    component: FuncionariosPesquisa,
  },
];
