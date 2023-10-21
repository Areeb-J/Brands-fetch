import { Component, OnInit } from '@angular/core';
import { ScreenResizeService } from "./services/screen-resize.service";
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isMobileView: boolean = false;
  mobileScreenWidth = 768;
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private screenResize: ScreenResizeService,
  ) {}

  ngOnInit(): void {
    this.isMobileView = this.screenResize.isMobileView;
    this.screenResize.screenSizeChange.subscribe(isMobileView => {
      this.isMobileView = isMobileView;
    });
    this.onResize();
  }

  onResize() {
    this.isMobileView = window.innerWidth <= this.mobileScreenWidth;
    this.screenResize.screenSizeChange.emit(this.isMobileView);
  }
}
