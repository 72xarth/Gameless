import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule,MatButtonModule,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{
  constructor(private http : HttpClient){}
  data! : any;
  ngOnInit(): void {
    this.findOne();
  }
  
  async findOne() {
 
    const url = `http://localhost:3000/game/picture`;
    const data = await lastValueFrom(this.http.get(url));
    this.data = data;

    
  }

  async click1() {
    let json = {
      
      win : "A",
      gid1 : this.data[0].gid,
      score1 : this.data[0].score,
      gid2 : this.data[0].gid,
      score2 : this.data[0].score

    }
    this.findOne();

}

  async click2(){
    let json = {
      
      win : "A",
      gid1 : this.data[0].gid,
      score1 : this.data[0].score,
      gid2 : this.data[0].gid,
      score2 : this.data[0].score

    }
    this.findOne();


  }


}


