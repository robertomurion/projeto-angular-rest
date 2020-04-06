import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../app-constant';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario) {
    return this.http.post(AppConstant.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      let token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
      localStorage.setItem('token', token);

      // console.info('Token : ' + localStorage.getItem('token');

      this.router.navigate(['home']);
    },
      error => {
        console.error('Erro ao fazer o login');
        window.alert('Acesso negado');
      });
  }

}
