import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List_Storage';

const defaultTodoList  = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[];
  private storageService: StorageService;

  constructor(storageService: StorageService) {
    this.storageService = storageService;
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
   }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes: { completed: boolean }) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  editItem(item: TodoItem, changes: { newTitle: string }) {
    const index = this.todoList.indexOf(item);
    item.title = changes.newTitle;
    this.todoList[index] = { ...item };
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  private saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

}
