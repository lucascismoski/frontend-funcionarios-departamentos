import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-departamento-cadastro',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './departamento-cadastro.html',
  styleUrl: './departamento-cadastro.css',
})
export class DepartamentoCadastro {
  protected nomeDepartamento = '';

  protected salvar(form: NgForm) {
    console.log(form);
    form.resetForm();
  }
}
