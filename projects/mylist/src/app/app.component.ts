import { Component } from '@angular/core';

@Component({
  selector: 'cp-root',
  template: `
    <cp-main-layout>
      <router-outlet></router-outlet>
    </cp-main-layout>
  `,
})
export class AppComponent {}
