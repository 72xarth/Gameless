import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/appdata.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatIconModule,RouterLink,ReactiveFormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component implements OnInit {
  myForm!: FormGroup;
  bool: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService,private route:Router) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      gmail: [''],
      password: [''],
    });
  }

  async submitForm() {
     let formData = this.myForm.value;
    console.log(formData);
    
     this.Checklogin(formData);
  
  }

  async Checklogin(jsonData: any) {
    this.bool = await this.api.checkLogin(jsonData);
 

    
    
    
    if(this.bool.type == 0){
      console.log(this.bool);
      localStorage.setItem('gamil',this.bool.gmail);
      localStorage.setItem('id',this.bool.uid);
      localStorage.setItem('name',this.bool.name);
      localStorage.setItem('url',this.bool.url);
      localStorage.setItem('fixtime',this.bool.fixtime)
        this.route.navigate(['/login2/']);

    }
    else{
      console.log("admin here");
      
      console.log(this.bool);
      localStorage.setItem('gamil',this.bool.gmail);
      localStorage.setItem('id',this.bool.uid);
      localStorage.setItem('name',this.bool.name);
      localStorage.setItem('url',this.bool.url);
      localStorage.setItem('fixtime',this.bool.fixtime)
        this.route.navigate(['/admin/']);
      
    }
  }
}
