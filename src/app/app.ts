import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';

import { CustomSidenav } from "./components/custom-sidenav/custom-sidenav";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatSidenavContainer, MatSidenavContent, MatSidenav, CustomSidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  collapsed = signal(false);
  sidenavWidth = computed(() => {
    return this.collapsed() ? '65px' : '250px';
  })
}
