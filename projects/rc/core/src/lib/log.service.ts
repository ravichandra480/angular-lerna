import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(message: string): void {
    console.error('I am a useless log ', message);
  }
}
