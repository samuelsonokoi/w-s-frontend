import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor(private _title: Title) { 
    this._title.setTitle("Task 1 - Interview | Witts and Stratts");
  }

  ngOnInit() {
  }

}
