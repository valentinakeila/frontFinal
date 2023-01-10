import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultas } from '../models/consultas';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

//URL: string = 'http://localhost:3000/'

URL = environment.URL
  consultas: any;

  constructor(private http: HttpClient) { }

  guardarConsulta(consulta: Consultas): Observable<any> {
    return this.http.post(this.URL, consulta)
  }
  }
