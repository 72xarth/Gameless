import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../service/appdata.service';
import { lastValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './ResultDialogComponent';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule


@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [RouterModule,MatButtonModule,RouterModule,RouterLink,FormsModule],
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
  image : any;
  fixtime : any;
  ngOnInit(): void {
    this.image = localStorage.getItem('url');
    this.fixtime = localStorage.getItem('fixtime');
    
    this.id = localStorage.getItem('id');
    //console.log(this.id);
    this.name = localStorage.getItem('name');
    this.findOne();
  }
  
  async findOne() {
    let fixtime ;
    let x = {x:fixtime};
    const url = /*`https://gameapib.onrender.com/game/picture`*/ 'http://localhost:3000/game/';
    const data = await lastValueFrom(this.http.post(url,fixtime));
    
    console.log(data);
    
    this.data = data;
    
  }

  async click1() {
   
    console.log("asas");
    let json = {
      
      win : "A",
      gidA : this.data.gid1,
      imageA : this.data.image1,
      scoreA : this.data.score1,
      scoreUp1 : this.data.scoreUp1,
      newScore1: this.data.newScore1,
      gidB : this.data.gid2,
      imageB : this.data.image2,
      scoreB : this.data.score2,
      scoreDown1 : this.data.scoreDown1,
      newScore2: this.data.newScore2

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
      gidA : this.data.gid1,
      imageA : this.data.image1,
      scoreA : this.data.score1,
      scoreUp1 : this.data.scoreUp1,
      newScore1: this.data.newScore1,
      gidB : this.data.gid2,
      imageB : this.data.image2,
      scoreB : this.data.score2,
      scoreDown1 : this.data.scoreDown1,
      newScore2: this.data.newScore2

    }
    console.log(this.data.gid1);
    
    this.findOne();
    
    try {
      let x = await this.api.updatescore(json);
  
   

      this.openDialog(x);
    } catch (error) {
      
    }

    

  }

  async openDialog(data: any){
    // console.log(data);
     
     await this.api.delay(data);
     const dialogRef = this.dialog.open(ResultDialogComponent, {
       width: '250px',
       data: data
     });
 }




}


