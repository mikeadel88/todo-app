import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private apiUrl="http://localhost:3000/todos"
  constructor(private http:HttpClient) { }
  //getAll
  getAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl)
  }
  //create task
  createTAsk(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl,todo)
  }
  getTaskById(id:string):Observable<Todo>{
    return this.http.get<Todo>(`${this.apiUrl}/${id}`)
  }
  updateTask(todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`,todo)
  }
  deleteTask(todoid:string):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${todoid}`)
  }
}
