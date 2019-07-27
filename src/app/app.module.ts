import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

import { TodoListService } from './services/todo-list.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoListComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      maxOpened: 1,
      autoDismiss: true,
      messageClass: 'toast-message-small'
    })
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
