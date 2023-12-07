import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Info } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  // to create the student info
  createStudentInfo = (payload: any) => {
    return this.http.post(`${environment.apiBaseUrl}/tasks`, payload);
  };

  // to get the student info
  getStudentsInfo(): Observable<Info[]> {
    return this.http.get<Info[]>(`${environment.apiBaseUrl}/tasks`);
  }

  // to delete the student info
  deleteStudentInfo = (id: string) => {
    return this.http.delete(`${environment.apiBaseUrl}/tasks/${id}`);
  };
}
