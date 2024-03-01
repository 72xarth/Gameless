import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-register4',
  standalone: true,
  imports: [RouterLink,RouterModule,MatButtonModule,MatIconModule],
  templateUrl: './register4.component.html',
  styleUrl: './register4.component.scss'
})
export class Register4Component {

}
