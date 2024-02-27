import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../Servcies/todo.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-detiles',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-detiles.component.html',
  styleUrl: './todo-detiles.component.scss'
})
export class TodoDetilesComponent implements OnInit {
   todo:Todo={}as Todo
   constructor(private todoServe:TodoService,private router:Router ,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.getTodo()
  }
   getTodo(){
    const id=String(this.route.snapshot.paramMap.get("id"))
    this.todoServe.getTaskById(id).subscribe(todo=>{
      this.todo=todo
    })
   }
   upDateTodo():void{
    if(this.todo){
      this.todoServe.updateTask(this.todo).subscribe(()=>{
        this.router.navigate(["/todo"])
      })
    }

   }
}
