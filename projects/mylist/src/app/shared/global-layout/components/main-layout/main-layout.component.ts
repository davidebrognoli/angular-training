import { Component } from '@angular/core';

@Component({
  selector: 'cp-main-layout',
  template: `
    <mat-toolbar color="primary">
      <mat-icon style="margin-right: 6px;">live_tv</mat-icon>
      <span>My Movie App</span>
    </mat-toolbar>

    <mat-drawer-container class="main-container">
      <mat-drawer mode="side" opened>
        <mat-list role="list">
          <mat-list-item role="listitem"><a mat-flat-button routerLink="/">Home</a></mat-list-item>
          <mat-list-item role="listitem"><a mat-flat-button routerLink="/list">Preferiti</a></mat-list-item>
        </mat-list>
      </mat-drawer>

      <mat-drawer-content class="main-content">
        <ng-content></ng-content>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      .main-container {
        height: calc(100% - 64px);
      }

      .main-content {
        padding: 24px;
      }
    `,
  ],
})
export class MainLayoutComponent {}
