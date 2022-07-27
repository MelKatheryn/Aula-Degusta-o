import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Msm', url: '/card', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Outbox', icon: 'heart' },
    { title: 'Archived', url: '/folder/Outbox', icon: 'archive' },
    { title: 'Trash', url: '/folder/Outbox', icon: 'trash' },
    { title: 'Spam', url: '/folder/Outbox', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
