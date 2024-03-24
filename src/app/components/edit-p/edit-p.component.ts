import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterLink,RouterModule } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/appdata.service';

@Component({
  selector: 'app-edit-p',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,MatFormFieldModule,RouterModule,RouterLink],
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

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      Nname: [''],
      // Npassword: [''],
      // Nimage: [''],
    });
    
    this.image = localStorage.getItem('url');
    this.id = localStorage.getItem('id');
    this.email = localStorage.getItem('gmail');
    this.name = localStorage.getItem('name');
  }

submitForm() {
  this.api.editPro(this.myForm);
  console.log(this.myForm.value);
  
}
  back() {
    window.history.back();
}

}
