import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder,FormGroup, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatIconModule,RouterLink,ReactiveFormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component implements OnInit{
  
  public loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private http: HttpClient,private route: Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      gmail:[""],
      password:[""]
    })
  }
  async login() {
    try {
      const res = await this.http.get<any>("http://localhost:3000/game/game/insert").toPromise();
  
      const User = res.find((a: any) => {
        return a.gmail == this.loginForm.value.gmail && a.password == this.loginForm.value.password;
      });
  
      if (User) {
        alert("Login Success");
        this.loginForm.reset();
        this.route.navigate(["/login"]);
      } else {
        alert("User Not Found");
      }
    } catch (err) {
      alert("Something went wrong");
    }
  }

}
