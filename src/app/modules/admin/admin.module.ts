import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent, EditFlowersComponent, FlowersComponent, NavigationComponent} from "./components";
import {OrderDetailComponent, OrdersComponent} from "../shared/components";
import {RouterModule, Routes} from "@angular/router";
import { DxDataGridModule, DxTemplateModule, DxSelectBoxModule, DxChartModule} from 'devextreme-angular';
import { ChartComponent } from './components/chart/chart.component';
const COMPONENTS = [
  DashboardComponent,
  FlowersComponent,
  EditFlowersComponent,
  EditFlowersComponent,
  NavigationComponent
];
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'flower',
    component: FlowersComponent,
  },
  {
    path: 'flower/:id',
    component: EditFlowersComponent,
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
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    DxTemplateModule,
    DxDataGridModule,
    DxChartModule,
    DxSelectBoxModule
  ]
})
export class AdminModule {
}
