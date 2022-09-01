import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Task} from "./task";

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  tasksList: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  deleteTask(task: Task): void {
    const tasks = this.tasksList.getValue();
    const newTasks = tasks.filter(res => res.id !== task.id);
    this.tasksList.next([...newTasks]);
  }

  addTask(task: Task): void {
    const tasks = this.tasksList.getValue();
    task.id = tasks.length;
    this.tasksList.next([...tasks, task]);
  }

  editTask(task: Task): void {
    const tasks = this.tasksList.getValue();
    const index = tasks.findIndex(res => res.id == task.id);
    tasks[index] = task;
    this.tasksList.next([...tasks]);
  }

  constructor() { }
}
