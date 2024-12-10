import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private apiUrl = 'http://localhost:8080/api/compromissos'; // URL da API

  constructor(private http: HttpClient) { }

  getCompromissos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addCompromisso(compromisso: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, compromisso, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  removeCompromisso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
