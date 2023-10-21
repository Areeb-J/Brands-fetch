import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { ScreenResizeService } from '../../services/screen-resize.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit, OnDestroy {

  isMobileView: boolean = false;
  screenSizeEvent: Subscription = new Subscription;
  filterContentForm: FormGroup;

  constructor(
    private screenResize: ScreenResizeService,
    private formBuilder: FormBuilder,
  ) {
    this.filterContentForm = this.formBuilder.group({
      searchBy: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {
    this.isMobileView = this.screenResize.isMobileView;
    this.screenSizeEvent = this.screenResize.screenSizeChange.subscribe(isMobileView => {
      this.isMobileView = isMobileView;
    });
  }

  ngOnDestroy(): void {
    this.screenSizeEvent.unsubscribe();
  }

  onSearch(value: any) {
    if (value) {
      console.log("On Search",value); 
    }
  }
}
