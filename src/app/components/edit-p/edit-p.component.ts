import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/appdata.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-p',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-p.component.html',
  styleUrls: ['./edit-p.component.scss']
})
export class EditPComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: Router
  ) { }

  id: any;
  image: any;
  data: any;
  email: any;
  name: any;
  myForm!: FormGroup;
  FormData = new FormData();

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['']
      // password: [''],
      // url: [''],
    });

    this.image = localStorage.getItem('url');
    this.id = localStorage.getItem('id');
    this.email = localStorage.getItem('gmail');
    this.name = localStorage.getItem('name');
  }

  async submitForm() {
    
    if(this.myForm.valid){
      this.FormData.append('name',this.myForm.get('name')!.value);
      // this.FormData.append('gmail',this.myForm.get('gmail')!.value);
      // this.FormData.append('password',this.myForm.get('password')!.value);
    }
   
    this.FormData.forEach((value,key)=>{
      console.log(key,',',value);
      
    });
    this.data = await this.api.editPro(this.id,this.FormData);
  }

  back() {
    window.history.back();
  }

  upfile($event: Event) {
    const file = ($event.target as HTMLInputElement).files![0];
    this.FormData.append('file', file);
  }
}
