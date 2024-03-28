import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterLink,RouterModule } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/appdata.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-p',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatFormFieldModule,RouterModule,RouterLink],
  templateUrl: './edit-p.component.html',
  styleUrl: './edit-p.component.scss'
})
export class EditPComponent {


  constructor(private formBuilder: FormBuilder, private api: ApiService,private route:Router) {}
  id : any;
  image : any;
  email : any;
  name : any;
  myForm!: FormGroup;
  formData = new FormData();

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [''],
      // Npassword: [''],
      // Nimage: [''],
    });
    
    this.image = localStorage.getItem('url');
    this.id = localStorage.getItem('id');
    this.email = localStorage.getItem('gmail');
    this.name = localStorage.getItem('name');
    console.log(this.id);
    
  }

  async submitForm() {
    const formData = this.myForm.value; // Get only the form values, not the entire form group
    console.log(formData); // Log only the form values
    let re =await this.api.editPro(formData, this.id); // Assuming editPro method expects form data and id
    console.log(re);
    localStorage.setItem("name",formData.name)
    
}

  back() {
    window.history.back();
}

upfile($event: Event) {
    const file  = ($event.target as HTMLInputElement).files![0];
      
    this.formData.append('file',file);
}

}
