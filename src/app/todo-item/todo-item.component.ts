import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoItemUpdate } from '../interfaces/todo-item-updated';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<TodoItemUpdate> = new EventEmitter();
  @Output() edit: EventEmitter<TodoItemUpdate> = new EventEmitter();

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  editItem(newTitleInput: string) {
    newTitleInput = newTitleInput.trim();
    if (newTitleInput === '') {
      this.toastr.warning('Items can\'t be blank');
      this.edit.emit({
        item: this.item,
        changes: {newTitle: this.item.title}
      });
    } else {
      this.edit.emit({
        item: this.item,
        changes: {newTitle: newTitleInput}
      });
    }
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
