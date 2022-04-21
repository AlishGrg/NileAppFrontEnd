import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User;
  constructor(private uService: UserService) {
    this.user = new User();
   }

  ngOnInit(): void {
  }
  onSubmit(signupForm : any){
    console.log(signupForm.value);
    this.user = signupForm.value;
    this.uService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        if(data) alert("User Added Successfully");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}

