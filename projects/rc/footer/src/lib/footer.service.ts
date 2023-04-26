import { Injectable } from '@angular/core';
import { LogService } from '@rc/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(
    private logService: LogService
  ) { 
    logService.log('I am  footer')
  }
}
