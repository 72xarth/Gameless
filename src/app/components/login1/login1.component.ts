import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [RouterModule,MatButtonModule,RouterModule],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.scss'
})
export class Login1Component {

}
