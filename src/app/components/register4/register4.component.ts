import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../service/appdata.service';

@Component({
  selector: 'app-register4',
  standalone: true,
  imports: [RouterLink,RouterModule,MatButtonModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './register4.component.html',
  styleUrl: './register4.component.scss'
})
export class Register4Component implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [''],
      gmail: ['' ],
      password: [''],
      
    });
  }

  async submitForm() {
      let formData = this.myForm.value;
          console.log(formData);
          this.register(formData);
  }

  async register(jsonData: any) {
    await this.api.register(jsonData);
    this.route.navigate(['/login/']);
  }
}
