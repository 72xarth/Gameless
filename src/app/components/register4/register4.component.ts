import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register4',
  standalone: true,
  imports: [RouterLink,RouterModule,MatButtonModule,MatIconModule],
  templateUrl: './register4.component.html',
  styleUrl: './register4.component.scss'
})

export class Register4Component implements OnInit {

  public signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient,private route: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [""],
      gmail: [""],
      password: [""]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/game/game/insert",this.signupForm.value)
    .subscribe(res=>{
      alert("Sign Up Success");
      this.signupForm.reset();
      this.route.navigate(['/login'])
    },err=>{
      alert("Some thing went wrong")
    })
  }

}
