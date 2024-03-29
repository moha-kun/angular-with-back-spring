import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Member from '../../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberDataService {
  baseUrl: string = 'http://localhost:8080/api/v1/members'

  constructor(private http: HttpClient) { }

  findAllMembers(id: number | undefined): Observable<Member[]> {
    let url = id ? `${this.baseUrl}?formationId=${id}` : this.baseUrl
    return this.http.get<Member[]>(url)
  }

  findMemberById(id: number): Observable<any> {
    return this.http.get<Member[]>(`${this.baseUrl}/${id}`)
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  createMember(member: Member): Observable<any> {
    return this.http.post(this.baseUrl, member)
  }

  updateMember(id: number, member: Member) {
    return this.http.put(`${this.baseUrl}/${id}`, member)
  }
}
