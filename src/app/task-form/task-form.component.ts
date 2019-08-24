import { Component, OnInit } from '@angular/core';

import {Task} from '../Task.model';


@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.sass']
})
export class TaskFormComponent implements OnInit {
 
  model = new Task(1, '', '', '', 'http://');

  constructor() { }

  ngOnInit() {
  }

  get currentTask(){
    return JSON.stringify(this.model);
  }

}
