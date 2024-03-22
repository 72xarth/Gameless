import { Injectable } from '@angular/core';
import { Constants } from '../config/constants';
import { Constants1 } from '../config/constants';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private constants: Constants, private constants1: Constants, private http: HttpClient) {}

  // Login 
  public async checkLogin(options?: any) {    
    const url = `${this.constants.API_ENDPOINT}/test`;
    
    return lastValueFrom(this.http.post(url, options));
  }

  // Register 
  public async register(option?: any) {
    const url = `${this.constants.API_ENDPOINT}/game/insert`;
    console.log(url);
    
    return lastValueFrom(this.http.post(url, option));
  }


  //upload
  public async upload(option?: any,id? : any) {
    const url = "http://localhost:3000/upload"+"/"+id;    
    return lastValueFrom(this.http.post(url, option));
  }



  // Get image
  public async getImage(id?: any) {    
    const url = `${this.constants.API_ENDPOINT}/image/${id}`;
    return lastValueFrom(this.http.get(url));
  }

  public async deleteImage(id?: any) {    
    const url = `${this.constants.API_ENDPOINT}/image/${id}`;
    return lastValueFrom(this.http.delete(url));
  }
  

  // Get date
  public async getDate() {    
    
    const url = `${this.constants.API_ENDPOINT}/date`;
    const result = await lastValueFrom(this.http.get(url));
    return result;
  }
// Get date
public async getBefore() {    
    
  const url = `${this.constants.API_ENDPOINT}/before`;
  const result = await lastValueFrom(this.http.get(url));
  return result;
}
  public async getImageAll() {    
    const url = `${this.constants.API_ENDPOINT}/image/all`;
    return lastValueFrom(this.http.get(url));
  }

  // Update point 
  public async putPoint(options?: any) {    
    const url = `${this.constants.API_ENDPOINT}/eloprocess`;
    return lastValueFrom(this.http.put(url, options));
  }

  // Update imageUser 
  public async imageUser(options?: any) {    
    const url = `${this.constants.API_ENDPOINT}/upload/image`;
    return lastValueFrom(this.http.put(url, options));
  }

  // Select Getgraph
  public async getgraph(id?: any) {    
    const url = await`${this.constants.API_ENDPOINT}/graph/${id}`;
    console.log(url);
    
    return lastValueFrom(this.http.post(url, ""));
  }

  // Delete img
  public async deleteIMG(imageId: string) {    
    const url = `${this.constants.API_ENDPOINT}/image/${imageId}`;
    return lastValueFrom(this.http.delete(url));
  }

  // Insert picture
  public insertPicture(option?: any){
    const url = `${this.constants.API_ENDPOINT}/upload`;
    return this.http.post(url, option);
  }

  // update score 
  public async updatescore(options?: any) {    
    const url = `${this.constants.API_ENDPOINT}/scoreupdate`;
    return console.log(lastValueFrom(this.http.put(url, options)));
     
  }
}

