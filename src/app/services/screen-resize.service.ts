import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenResizeService {

  screenSizeChange = new EventEmitter<boolean>(); // True if is mobile, False if desktop
  isMobileView: boolean = false;

  constructor() { 
    this.screenSizeChange.subscribe(isMobileView => {
      this.isMobileView = isMobileView;
    })
  }
}
