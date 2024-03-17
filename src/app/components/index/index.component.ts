import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { ApiService } from '../../service/appdata.service';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule,MatButtonModule,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{
  

  constructor(private http : HttpClient,private api : ApiService,private route:Router){}
  data! : any;
  data1! : any;
  data2! : any;
  id: any;
  name : any;
  image : any;
  ngOnInit(): void {
    this.image = localStorage.getItem('url');

    
    this.id = localStorage.getItem('id');
    //console.log(this.id);
    this.name = localStorage.getItem('name');
    this.findOne();
  }
  
  async findOne() {
 
    const url = `https://gameapib.onrender.com/game/picture`;
    const data = await lastValueFrom(this.http.get(url));
    this.data = data;
    this.data1 = this.data[0];
    this.data2 = this.data[1];
  }

  async click1() {
    let json = {
      
      win : "A",
      gidA : this.data[0].gid,
      scoreA : this.data[0].score,
      gidB : this.data[1].gid,
      scoreB : this.data[1].score

    }
    this.findOne();
    await this.api.updatescore(json);
    

}

  async click2(){
    let json = {
      
      win : "B",
      gidA : this.data[0].gid,
      scoreA : this.data[0].score,
      gidB : this.data[1].gid,
      scoreB : this.data[1].score

    }
    this.findOne();
    await this.api.updatescore(json);
   


  }

  logout(){
      localStorage.clear();
      this.route.navigate(['/login/']);
  }


}


