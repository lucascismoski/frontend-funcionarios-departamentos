import { Routes } from '@angular/router';
import { DepartamentosPesquisa } from './departamentos-pesquisa/departamentos-pesquisa';
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
    path: 'funcionarios',
    component: FuncionariosPesquisa,
  },
];
