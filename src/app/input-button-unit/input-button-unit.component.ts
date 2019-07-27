import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  placeholderText = 'Add a new item';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor(private toastr: ToastrService) { }

  ngOnInit() { }

  submitValue(newTitle: string) {
    if (newTitle.trim() !== '') {
      this.submit.emit(newTitle);
    } else {
      this.toastr.warning('Items can\'t be blank');
    }
  }
}
