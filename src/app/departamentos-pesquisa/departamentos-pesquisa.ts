import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-departamentos-pesquisa',
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DialogModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './departamentos-pesquisa.html',
  styleUrl: './departamentos-pesquisa.css',
})
export class DepartamentosPesquisa {
  constructor(private readonly confirmationService: ConfirmationService) {}

  protected filtroNome = '';
  protected dialogVisivel = false;
  protected nomeEmEdicao = '';
  protected idEmEdicao: number | null = null;
  protected tituloDialog = 'Novo Departamento';

  protected departamentos = [
    { id: 1, nomeDepartamento: 'Recursos Humanos' },
    { id: 2, nomeDepartamento: 'Tecnologia da Informação' },
    { id: 3, nomeDepartamento: 'Marketing' },
    { id: 4, nomeDepartamento: 'Vendas' },
    { id: 5, nomeDepartamento: 'Financeiro' },
    { id: 6, nomeDepartamento: 'Logística' },
    { id: 7, nomeDepartamento: 'Pesquisa e Desenvolvimento' },
    { id: 8, nomeDepartamento: 'Atendimento ao Cliente' },
    { id: 9, nomeDepartamento: 'Jurídico' },
    { id: 10, nomeDepartamento: 'Administração' },
    { id: 11, nomeDepartamento: 'Produção' },
  ];

  protected get departamentosFiltrados() {
    const filtro = this.filtroNome.trim().toLowerCase();

    if (!filtro) {
      return this.departamentos;
    }

    return this.departamentos.filter((departamento) =>
      departamento.nomeDepartamento.toLowerCase().includes(filtro),
    );
  }

  protected editarDepartamento(id: number) {
    const departamento = this.departamentos.find((item) => item.id === id);

    if (!departamento) {
      return;
    }

    this.idEmEdicao = departamento.id;
    this.nomeEmEdicao = departamento.nomeDepartamento;
    this.tituloDialog = 'Editar Departamento';
    this.dialogVisivel = true;
  }

  protected excluirDepartamento(id: number) {
    this.confirmationService.confirm({
      header: 'Confirmação',
      message: 'Deseja realmente excluir este departamento?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Excluir',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.departamentos = this.departamentos.filter((item) => item.id !== id);
      },
    });
  }

  protected abrirNovoDepartamento() {
    this.idEmEdicao = null;
    this.nomeEmEdicao = '';
    this.tituloDialog = 'Novo Departamento';
    this.dialogVisivel = true;
  }

  protected salvarDepartamento() {
    const nomeTratado = this.nomeEmEdicao.trim();

    if (!nomeTratado) {
      return;
    }

    if (this.idEmEdicao === null) {
      const maiorId = this.departamentos.length
        ? Math.max(...this.departamentos.map((item) => item.id))
        : 0;

      this.departamentos = [
        ...this.departamentos,
        {
          id: maiorId + 1,
          nomeDepartamento: nomeTratado,
        },
      ];
    } else {
      this.departamentos = this.departamentos.map((item) =>
        item.id === this.idEmEdicao ? { ...item, nomeDepartamento: nomeTratado } : item,
      );
    }

    this.fecharDialog();
  }

  protected fecharDialog() {
    this.dialogVisivel = false;
    this.idEmEdicao = null;
    this.nomeEmEdicao = '';
  }
}
