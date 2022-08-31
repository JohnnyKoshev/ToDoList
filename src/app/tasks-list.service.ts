import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  tasksList = [{
    text: 'Smth'
  }];

  getTasksList(): Observable<any>{
    return of(this.tasksList);
  }

  constructor() { }
}
