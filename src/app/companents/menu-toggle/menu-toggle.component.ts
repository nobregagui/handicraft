import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent {
  @Input() wordLogin: string = '';
  @Input() menuOpen: boolean = false;
  @Input() authNameLogin: boolean = false;
  @Input() toggleMenu!: Function;
  @Input() menu!: string[];
}
