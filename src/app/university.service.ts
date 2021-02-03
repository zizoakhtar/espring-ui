import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from './university';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private baseUrl = 'http://localhost:8098/examen/servlet';

  constructor(private http: HttpClient) { }

  getUniversity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl+ '/getOneUniversity/'}/${id}`);
  }

  createUniversity(university: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl  +'/addUniversity'}` ,university);
  }

  updateUniversity(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl + '/students'}/${id}`, value);
  }

  deleteUniversity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + '/supp'}/${id}`, { responseType: 'text' });
  }

  getUniversityList(): Observable<any> {
    return this.http.get<University[]>(this.baseUrl + '/getAll');  
}






}
