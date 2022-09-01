import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {FormsModule} from "@angular/forms";
import { ToolsMenuComponent } from './tools-menu/tools-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    ToolsMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
