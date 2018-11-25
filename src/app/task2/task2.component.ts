import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  cardForm: FormGroup;
  days = [
    1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  ];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  years = [2018, 2019, 2020, 2021, 2022, 2023];

  constructor(private _title: Title) { 
    this._title.setTitle("Task 2 - Interview | Witts and Stratts");

    this.cardForm = new FormGroup({
      cardNumber: new FormControl("", [Validators.required]),
      cardCVC: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      cardName: new FormControl("", [Validators.required]),
      cardExpDay: new FormControl("", [Validators.required]),
      cardExpMonth: new FormControl("", [Validators.required]),
      cardExpYear: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit() {
  }

}
