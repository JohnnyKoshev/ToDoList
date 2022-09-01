import {Component, OnInit, ElementRef, Inject, ViewChild, OnDestroy} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {TasksListService} from "../tasks-list.service";
import {Task} from "../task";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit, OnDestroy {

  isMenuTriggered: boolean = false;
  menuPos = {
    x: 0,
    y: 0
  };

  newTaskInput = '';
  tasksList: Task[] = [];
  tasksList$: Subscription | null = null;
  selectedTask: Task | null = null;

  constructor(@Inject(DOCUMENT) private document: Document, private tasksListService: TasksListService) {
  }

  ngOnDestroy(): void {
    this.tasksList$?.unsubscribe();
    }

  ngOnInit(): void {
    this.handleLeftClick();
    this.getTasksList();
    this.onEnter();
  }

  onEnter(){
    this.document.addEventListener('keypress', (e)=>{
      if(e.key === 'Enter'){
        this.addTask();
      }
    })
  }

  getTasksList(){
    this.tasksList$ = this.tasksListService.tasksList.subscribe(tasks => this.tasksList = tasks);
  }

  showMenu(task: Task, e: MouseEvent) {
    e.preventDefault();
    this.selectedTask = task;
    this.menuPos.x = e.pageX;
    this.menuPos.y = e.pageY;
    this.isMenuTriggered = true;
  }

  handleLeftClick() {
    this.document.addEventListener('click', (e) => {
      this.isMenuTriggered = (e.target as HTMLElement).className === 'tools-container';
    })
  }

  computeId(el: HTMLLIElement) {
    let i = 0;
    while (el.previousElementSibling) {
      el = (el.previousElementSibling as HTMLLIElement);
      i++;
    }
    return i;
  }


  addTask() {
    if (this.newTaskInput.trim() === '') {
      return;
    }
    const newTask: Task = {
      text: this.newTaskInput
    };
    this.tasksListService.addTask(newTask);
    this.newTaskInput = '';
  }

  onCheckbox(task: Task) {
    task.isChecked = !task.isChecked;
  }


}
