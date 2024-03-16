import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../../service/appdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standing',
  standalone: true,
  imports: [MatButtonModule,RouterLink,RouterModule,MatTableModule,CommonModule],
  templateUrl: './standing.component.html',
  styleUrl: './standing.component.scss'
})
export class StandingComponent {

  data : any;
  before: any;
  rank:any;
  constructor( private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.getDate();
 
  }

back() { 
    window.history.back();
}

async getDate() {
   this.data = await this.api.getDate();
   this.before = await this.api.getBefore();
   
   if(this.data.length !=10){
    for(let i = this.data.length ; i< 10;i++){
      this.data.push("");
    }
 }
 console.log(this.data);
 console.log(this.before);
 
  
}

check(GSID: any) {
 
      
      
      
      for (let index = 0; index < this.before.length; index++) {
        if (this.before[index].GSID == GSID) {
          console.log(this.before[index].rank);
          return this.before[index].rank;
        }
      }
}

  
}


