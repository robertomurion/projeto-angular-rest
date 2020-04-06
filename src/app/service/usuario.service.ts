import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstant } from '../app-constant';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstant.baseUrl);
  }

  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstant.baseUrl + 'page/' + pagina);
  }

  getStudent(id): Observable<any> {
    return this.http.get<any>(AppConstant.baseUrl + id);
  }

  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstant.baseUrl + id, { responseType: 'text' });
  }

  consultarUser(nome: String): Observable<any> {
    return this.http.get(AppConstant.baseUrl + 'usuarioPorNome/' + nome);
  }

  consultarUserPorPage(nome: String, pagina: Number): Observable<any> {
    return this.http.get(AppConstant.baseUrl + 'usuarioPorNome/' + nome + '/page/' + pagina);
  }

  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstant.baseUrl, user);
  }

  updateUsuario(user): Observable<any> {
    return this.http.put<any>(AppConstant.baseUrl, user);
  }

  removerTelefone(id): Observable<any> {
      return this.http.delete(AppConstant.baseUrl + 'removerTelefone/' + id, { responseType: 'text' });
  }

  userAutenticado() {
    if (localStorage.getItem('token') !== null &&
      (localStorage.getItem('token').toString().trim() != null)) {
      return true;
    } else {
      return false;
    }
  }

  getProfissaoList(): Observable<any> {
    return this.http.get<any>(AppConstant.baseUrlPath + 'profissao/');
  }
}
