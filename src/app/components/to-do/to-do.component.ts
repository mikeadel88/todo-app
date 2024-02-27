import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TodoService } from '../../Servcies/todo.service';
import { Todo } from '../../Models/todo';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule,
  CommonModule,RouterModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent implements OnInit{
 todo:Todo={} as Todo;
 todos:Todo[]=[];
 isShow:boolean=false;
  constructor(private todoSevices:TodoService){

  }
  ngOnInit(): void {
    this.getTodos()
  }
  getTodos(){
    this.todoSevices.getAll().subscribe(item=>{
      this.todos=item
    })
  }
  createTodo():void{
    const newTodo1={id:this.todo.id,title:this.todo.title,completed:false}
    this.todo=newTodo1
    this.todoSevices.createTAsk(this.todo).subscribe(todo=>{
      this.todos.push(todo)
    })
  }
  deleteTodo(todoId:string):void{
    this.todoSevices.deleteTask(todoId).subscribe(()=>{
     this.todos= this.todos.filter(todo=>todo.id!== todoId)
    })
  }

}
