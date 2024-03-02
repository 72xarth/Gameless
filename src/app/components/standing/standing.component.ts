import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-standing',
  standalone: true,
  imports: [MatButtonModule,RouterLink,RouterModule],
  templateUrl: './standing.component.html',
  styleUrl: './standing.component.scss'
})
export class StandingComponent {

}
