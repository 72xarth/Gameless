import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-p',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,MatFormFieldModule,RouterModule,RouterLink],
  templateUrl: './edit-p.component.html',
  styleUrl: './edit-p.component.scss'
})
export class EditPComponent {

}
