import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {OrdersComponent,
  OrderDetailComponent,
  ResetPasswordFormComponent,
  LoginFormComponent,
  HeaderComponent,
  FooterComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent
} from "./components";
import {FlowerService, UserService, OrderService} from "./services";
import {CartService} from "../client/services/cart.service";
import {DxAccordionModule, DxButtonModule, DxDataGridModule, DxMenuModule, DxToolbarModule} from "devextreme-angular";
import {DxiItemModule} from "devextreme-angular/ui/nested";
import { DefaultComponent } from './layouts/default/default.component';
import {RouterModule} from "@angular/router";

const PROVIDERS = [
  FlowerService,
  UserService,
  OrderService,
  CartService
]
const COMPONENTS = [
  OrdersComponent,
  OrderDetailComponent,
  ResetPasswordFormComponent,
  LoginFormComponent,
  HeaderComponent,
  FooterComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
  DefaultComponent
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
    imports: [
        CommonModule,
        DxButtonModule,
        DxiItemModule,
        DxMenuModule,
        RouterModule,
        DxAccordionModule,
        DxDataGridModule,
        DxToolbarModule
    ],
  providers:[
    ...PROVIDERS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule{
  // static forRoot(): ModuleWithProviders{
  //   return {
  //     providers: [...PROVIDERS],
  //     ngModule: SharedModule
  //   } as ModuleWithProviders;
  // }
}
