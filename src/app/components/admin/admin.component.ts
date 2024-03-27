import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatButtonModule,RouterModule,RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
