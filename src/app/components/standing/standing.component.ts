import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../../service/appdata.service';

@Component({
  selector: 'app-standing',
  standalone: true,
  imports: [MatButtonModule,RouterLink,RouterModule,MatTableModule],
  templateUrl: './standing.component.html',
  styleUrl: './standing.component.scss'
})
export class StandingComponent {

  data : any;
  
  constructor( private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.getDate();
  }

back() { 
    window.history.back();
}

async getDate() {
   this.data = await this.api.getDate();
   console.log(this.data);        
}

}
