import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public registrarUsuario(user:any){
    return this.http.post(`${baseUrl}/usuarios/`,user);
  }
}
