import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  CartComponent,
  CheckoutComponent,
  ContentComponent,
  FlowerDetailComponent,
  FlowersComponent,
  HomepageComponent,
  ListFlowersComponent
} from "./components";
import {RouterModule, Routes} from "@angular/router";
import {OrderDetailComponent, OrdersComponent} from "../shared/components";
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {
  DxMenuModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxButtonModule,
  DxToolbarModule,
  DxGalleryModule, DxDataGridModule, DxListModule
} from 'devextreme-angular';


const COMPONENTS = [
  CartComponent,
  FlowersComponent,
  CheckoutComponent,
  ListFlowersComponent,
  FlowerDetailComponent,
  HomepageComponent,
  ContentComponent
];
const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'flower',
    component: ListFlowersComponent,
  },
  {
    path: 'flower/:id',
    component: FlowerDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order',
    component: OrdersComponent,
  },
  {
    path: 'order/:id',
    component: OrderDetailComponent
  }
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    DxMenuModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxToolbarModule,
    RouterModule,
    DxGalleryModule,
    DxDataGridModule,
    DxListModule
  ]
})
export class ClientModule {
}
