import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from '../list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListtaskService {
  

  constructor(private http : HttpClient) { }
getlist(): Observable<task[]>
{
  return this.http.get<task[]>("https://jsonplaceholder.typicode.com/posts");
}

}
