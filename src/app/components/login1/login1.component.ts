import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [RouterModule,MatButtonModule,RouterModule,RouterLink],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.scss'
})
export class Login1Component {

}
