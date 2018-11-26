import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import { CreditCardValidator } from 'angular-cc-library';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  cardForm: FormGroup;
  days = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  ];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  years = [2018, 2019, 2020, 2021, 2022, 2023];
  pnotify = undefined;

  constructor(private _title: Title) { 
    this._title.setTitle("Task 2 - Interview | Witts and Stratts");

    this.cardForm = new FormGroup({
      cardNumber: new FormControl("", [Validators.required]),
      cardCVC: new FormControl("", [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(3)]),
      cardName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      cardExpDay: new FormControl("", [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]),
      cardExpMonth: new FormControl("", [Validators.required]),
      cardExpYear: new FormControl("", [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]),
    });

    // Pnotify
    this.pnotify = this.getPNotify();
  }

  ngOnInit() {
  }

  // Pnotify
  getPNotify() {
    PNotifyButtons; // Initiate the module. Important!
    return PNotify;
  }

  onSubmit(){
    let { cardNumber, cardCVC, cardName, cardExpDay, cardExpMonth, cardExpYear } = this.cardForm.value;
    let formRequest = { cardNumber, cardCVC, cardName, cardExpDay, cardExpMonth, cardExpYear };

    this.pnotify.success({
      text: "Transaction Successful.",
      cornerclass: 'ui-pnotify-sharp',
      styling: 'bootstrap4',
      icons: 'fontawesome5'
    });

    console.info("Card Form Submitted: " + formRequest);
  }

}
