import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Task} from "../task";
import {TasksListService} from "../tasks-list.service";

@Component({
  selector: 'app-tools-menu',
  templateUrl: './tools-menu.component.html',
  styleUrls: ['./tools-menu.component.css']
})
export class ToolsMenuComponent implements OnInit {
  @Input() isMenuTriggered!: boolean;
  @Input() menuPos!: { x: number, y: number };
  @Input() task: Task | null = null;

  @Output() isMenuTriggeredChange = new EventEmitter<boolean>();


  constructor(
    private tasksListService: TasksListService
  ) {
  }

  ngOnInit(): void {
  }


  edit() {
    let newText = prompt('Enter the new task text:')!;
    while(newText === ''){
      alert('The task text can not be empty!')
      newText = prompt('Enter the new task text:')!;
    }
    if (this.task) {
      this.task.text = newText;
      this.tasksListService.editTask(this.task);
    }
  }

  delete() {
    if (this.task)
    this.tasksListService.deleteTask(this.task);
  }
}
