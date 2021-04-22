import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-new-ticket',
  templateUrl: './create-new-ticket.component.html',
  styleUrls: ['./create-new-ticket.component.scss']
})
export class CreateNewTicketComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient) {
  }

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


  submit(): void {
    // send to server
    this.http.post<FormGroup>('http://localhost:8098/finalhomework/person', this.form.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.log(err));
    // this.http.get('https://jsonplaceholder.typicode.com/posts/1') // http://localhost:8098/finalhomework/person
    //   .subscribe(response => {
    //     console.log(response);
    //   });
  }
}
