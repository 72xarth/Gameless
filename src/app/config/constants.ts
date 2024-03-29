import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly API_ENDPOINT: string = 'https://gameapib.onrender.com/game' /*'http://localhost:3000/game'*/;
}

export class Constants1 {
  public readonly API_ENDPOINT: string = 'https://gameapib.onrender.com/upload' /*'http://localhost:3000/upload'*/;
}