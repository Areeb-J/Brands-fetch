import { Component, OnInit } from '@angular/core';
import { ScreenResizeService } from '../../services/screen-resize.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isMobileView: boolean = false;
  screenSizeEvent: Subscription = new Subscription;

  constructor(
    private screenResize: ScreenResizeService,
  ) {}

  ngOnInit() {
    this.isMobileView = this.screenResize.isMobileView;
    this.screenSizeEvent = this.screenResize.screenSizeChange.subscribe(isMobileView => {
      this.isMobileView = isMobileView;
    });
  }

  ngOnDestroy(): void {
    this.screenSizeEvent.unsubscribe();
  }
}
