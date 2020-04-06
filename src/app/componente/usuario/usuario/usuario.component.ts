import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Array<User[]>;
  nome: String;
  p: any;
  total: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data.content;
      this.total = data.totalElements;
    }
    );
  }

  deletarUsuario(id: Number, index: number) {
    if (confirm('Deseja mesmo remover?')) {
      this.usuarioService.deletarUsuario(id).subscribe(data => {
        // console.log('Retorno metedo delete: ' + data);
        // this.usuarioService.getStudentList().subscribe(data => {
        //   this.students = data;
        // });
        this.students.splice(index, 1); /*remove da tela */
      });
    }
  }

    consultarUser() {

    if (this.nome === '') {
      this.usuarioService.getStudentList().subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    } else {

      this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }

  carregarPagina(pagina) {
    if (this.nome !== '') {
      this.usuarioService.consultarUserPorPage(this.nome, pagina - 1).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    } else {
      this.usuarioService.getStudentListPage(pagina - 1).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }
}
