import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  baseUrl: string = 'http://localhost:8080/api/v1/enroll';

  constructor(private http: HttpClient) {}

  removeMemberFromFormation(formationId: number, memberId: number) {
    return this.http.delete(`${this.baseUrl}?formationId=${formationId}&memberId=${memberId}`)
  }

  addMemberToFormation(formationId: number, memberId: number) {
    return this.http.put(`${this.baseUrl}?formationId=${formationId}&memberId=${memberId}`, null)
  }
}
