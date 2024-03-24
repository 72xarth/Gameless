import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../service/appdata.service';
import { lastValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './ResultDialogComponent';



@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [RouterModule,MatButtonModule,RouterModule,RouterLink],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.scss'
})
export class Login1Component implements OnInit{
  constructor(private http : HttpClient,private api : ApiService, private dialog: MatDialog){}
  data! : any;
  data1! : any;
  data2! : any;
  id: any;
  name : any;
  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.name = localStorage.getItem('name');
    this.findOne();
  }
  
  async findOne() {
 
    const url = /*`https://gameapib.onrender.com/game/picture`*/ 'http://localhost:3000/game/picture';
    const data = await lastValueFrom(this.http.get(url));
    this.data = data;
    this.data1 = this.data[0];
    this.data2 = this.data[1];
  }

  async click1() {
    console.log("asas");
    let json = {
      
      win : "A",
      gidA : this.data[0].gid,
      scoreA : this.data[0].score,
      scoreUp1 : this.data[0].scoreUp,
      gidB : this.data[1].gid,
      scoreB : this.data[1].score,
      scoreDown1 : this.data[1].scoreDown,
      newScore1: this.data[0].newScore1,
      newScore2: this.data[1].newScore2

    }
    this.findOne();
  
    try {
      let x = await this.api.updatescore(json);
  
   

      this.openDialog(x);
    } catch (error) {
      
    }
     
   

}

  async click2(){
    let json = {
      
      win : "B",
      gidA : this.data[0].gid,
      scoreA : this.data[0].score,
      scoreUp1 : this.data[0].scoreUp,
      gidB : this.data[1].gid,
      scoreB : this.data[1].score,
      scoreDown1 : this.data[1].scoreDown,
      newScore1: this.data[0].newScore1,
      newScore2: this.data[1].newScore2

    }
    this.findOne();
    
    try {
      let x = await this.api.updatescore(json);
  
   

      this.openDialog(x);
    } catch (error) {
      
    }

  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      width: '250px',
      data: data
    });
}


}


