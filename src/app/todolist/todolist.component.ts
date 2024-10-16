import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taskArray=[{taskName:"Pray",isCompleted:false}]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.taskArray.push({taskName:form.controls['task'].value,isCompleted:false})
    form.reset()
  }

  onCheck(index:number){
    this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted
  }

  onDelete(index:number){
    this.taskArray.splice(index, 1)
  }
}
