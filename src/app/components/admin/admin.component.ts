import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../service/appdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatButtonModule,RouterModule,RouterLink,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  image! : any;
  id! : any;
  name! : any;
  data: any; 
  
  
  constructor( private api: ApiService,private route:Router) {}

  async ngOnInit(){
    this.image = localStorage.getItem('url');
    this.id = localStorage.getItem('id');
    this.name = localStorage.getItem('name');
    this.data = await this.api.getuse();
      
   
  
  }

}
