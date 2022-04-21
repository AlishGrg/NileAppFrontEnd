import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signinpass',
  templateUrl: './signinpass.component.html',
  styleUrls: ['./signinpass.component.css']
})
export class SigninpassComponent implements OnInit {

  constructor() { }
  onSubmit(signinpass:any)
  {
    console.log(signinpass.value);
  }
  ngOnInit(): void {
  }

}
