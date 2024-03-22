import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly API_ENDPOINT: string = 'https://gameapib.onrender.com/game';
}

export class Constants1 {
  public readonly API_ENDPOINT: string = 'https://gameapib.onrender.com/upload';
}