import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      category: new FormControl(''),
      name: new FormControl(''),
      disription: new FormControl(''),
      urgency: new FormControl(''),
      date: new FormControl(''),
      add_attachment: new FormControl(''),
      comment: new FormControl('')
    });
  }

  submit() {
    console.log( 'form', this.form.value);
  }

}
