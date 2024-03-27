import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ad-pro',
  standalone: true,
  imports: [MatButtonModule,RouterModule,RouterLink],
  templateUrl: './ad-pro.component.html',
  styleUrl: './ad-pro.component.scss'
})
export class AdProComponent {

}
