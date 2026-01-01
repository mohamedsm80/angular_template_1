import { Component, computed, Input, signal } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  animations: [
    trigger('sidenavWidth', [
      state('open', style({ width: '260px' })),
      state('closed', style({ width: '70px' })),
      transition('open <=> closed', animate('500ms ease-in-out'))
    ])
  ]
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
