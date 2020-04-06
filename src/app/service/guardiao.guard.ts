import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioAddComponent } from '../componente/usuario/usuario-add/usuario-add.component';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaoGuard implements CanActivate {


  constructor(private usuarioService: UsuarioService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.usuarioService.userAutenticado();

  }

}
