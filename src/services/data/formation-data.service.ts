import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Formation from '../../models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationDataService {
  baseUrl: string = 'http://localhost:8080/api/v1/formations'

  constructor(private http: HttpClient) { }

  findAllFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.baseUrl)
  }

  findFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.baseUrl}/${id}`)
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  createFormation(formation: Formation): Observable<any> {
    return this.http.post(this.baseUrl, formation)
  }

  updateFormation(id: number, formation: Formation): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, formation)
  }
}
