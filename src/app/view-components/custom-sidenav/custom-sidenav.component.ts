import { Component, computed, Input, input, signal } from '@angular/core';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val : boolean) {
    this.sideNavCollapsed.set(val);
  }


  menuItems = signal<MenuItem[]>([
    {
      icon : 'dashboard',
      label : 'Main',
      route : '',
    },
    {
      icon : 'analytics',
      label : 'Analytics',
      route : '/playground',
    },
    {
      icon : 'add_card',
      label : 'Add data',
      route : '/add-record',
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');

}
