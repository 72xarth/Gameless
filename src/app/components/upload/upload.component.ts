import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../../service/appdata.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [RouterModule,RouterLink,MatButtonModule,CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

 
  id: any;
  name : any;
  image : any;
  data: any;
  constructor( private api: ApiService,private route:Router) { }
 

  ngOnInit(): void {
    this.image = localStorage.getItem('image');
    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.name = localStorage.getItem('name');
    this.getimage();
   
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login/']);
}

 async getimage(){
  const response = await this.api.getImage(this.id);
  this.data = response;
  if(this.data.length !=5){
    for(let i = this.data.length ; i< 5;i++){
      this.data.push("");
    }
   for(let i of this.data)console.log(i.url);
    
 
}
console.log(this.data);

 }

 async upload(event : any) {
  const file  = event.target.files[0];
    const formData = new FormData();
    this.data = formData.append('file',file);
    const response = await this.api.upload(formData,this.id);
  console.log(response);  
  
  }

   async deleteImage(gid : any) {
    console.log(gid);
       this.id = gid
       const response = await this.api.deleteImage(this.id);
       this.data = response;
    }
}
