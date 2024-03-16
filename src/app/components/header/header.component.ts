import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';

 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,RouterModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  image: any;
  id: any;
  name: any;
  email: any;
    
  back() {
    window.history.back();
}

ngOnInit(): void {
  this.image = localStorage.getItem('url');
  this.id = localStorage.getItem('id');
  this.email = localStorage.getItem('gmail');
  console.log(this.id);
  console.log(this.image);
  this.name = localStorage.getItem('name');
  
 
}



}
