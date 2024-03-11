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
  FormData : FormData = new FormData();
  constructor(private formBuilder: FormBuilder,private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [''],
      gmail: ['' ],
      password: [''],
      file:['']
      
    });
  }

  async submitForm() {
    if(this.myForm.valid){
      this.FormData.append('name',this.myForm.get('name')!.value);
      this.FormData.append('gmail',this.myForm.get('gmail')!.value);
      this.FormData.append('password',this.myForm.get('password')!.value);
    }
    this.register(this.FormData);
    this.FormData.forEach((value,key)=>{
      console.log(key,' ',value);
      
    });
  }

  async register(jsonData: any) {
    await this.api.register(jsonData);
    this.route.navigate(['/login/']);
  }

  onFile($file : Event){
    const file = ($file.target as HTMLInputElement).files![0];
    this.FormData.append('file',file);
  }
}
