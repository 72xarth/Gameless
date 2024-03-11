import { Injectable } from '@angular/core';
import { Constants } from '../config/constants';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private constants: Constants, private http: HttpClient) {}

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

  // Get image
  public async getImage() {    
    const url = `${this.constants.API_ENDPOINT}/image`;
    return lastValueFrom(this.http.get(url));
  }

  // Get date
  public async getDate() {    
    
    const url = `${this.constants.API_ENDPOINT}/date`;
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

  // Select last UID
  public async lastUID(options?: any) {    
    const url = `${this.constants.API_ENDPOINT}/upload`;
    return lastValueFrom(this.http.get(url, options));
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
    
    return lastValueFrom(this.http.put(url, options));
  }
}
