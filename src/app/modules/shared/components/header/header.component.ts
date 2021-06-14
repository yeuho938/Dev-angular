import {Component, enableProdMode, Input, Output, EventEmitter} from '@angular/core';
import {USER_MENU} from "../../../client/shared/user_menu";
if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  itemMenu = USER_MENU;
  @Input() menuToggleEnabled: boolean = false;
  @Input() showHeaderMenu: boolean = false;

  @Output() menuToggle = new EventEmitter<boolean>();

  menuItems = USER_MENU;

  constructor() {
  }

  onSubmenuShowing(e) {
    if (e) {
      const menuPopup = e.submenu.$contentDelimiter[0].parentNode;
      if (menuPopup) {
        menuPopup.classList.add('header-submenu');
      }
    }
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}
