import { Component, computed, Input, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type MenuItem = {
    icon: string;
    label: string;
    route?:any;
}
@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive],
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
        route: '/dashboard'
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
  profilePicSize = computed(() => {
    return this.sideNavCollapsed() ? '32' : '100';
  })
    
}
