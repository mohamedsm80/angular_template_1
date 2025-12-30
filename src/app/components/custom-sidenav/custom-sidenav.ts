import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';

export type MenuItem = {
    icon: string;
    label: string;
    route?:any;
}
@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
})
export class CustomSidenav {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }
  menuItem = signal<MenuItem[]>([
    {
        icon: 'dashboard',
        label: 'Dashboard',
        route: '/'
    },
    {
        icon: 'video_library',
        label: 'Content',
        route: '/content'
    },
    {
        icon: 'analytics',
        label: 'Analytics',
        route: '/analytics'
    },
    {
        icon: 'comment',
        label: 'Comments',
        route: '/comments'
    }
  ])
    
}
