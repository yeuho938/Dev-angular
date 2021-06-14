// import {Routes} from '@angular/router';
// import {FlowersComponent} from './flowers/flowers.component';
// import {EditFlowersComponent} from './flowers/edit-flowers/edit-flowers.component';
// import {ListOrderComponent} from '../../shared/components/orders/list-order/list-order.component';
// import {OrderDetailComponent} from '../../shared/components/orders/order-detail/order-detail.component';
// import {OrdersComponent} from '../../shared/components/orders/orders.component';
// import {DashboardComponent} from './dashboard/dashboard.component';
//
// export const listRouter: Routes = [
//   {
//     path: 'owner-page',
//     component: DashboardComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'flower',
//     component: FlowersComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: '/flower/list',
//         pathMatch: 'full'
//       },
//       {
//         path: 'list',
//         component: ListFlowersComponent,
//       },
//       {
//         path: ':id/edit',
//         component: EditFlowersComponent
//       }
//     ]
//   },
//   {
//     path: 'order',
//     component: OrdersComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: '/order/list',
//         pathMatch: 'full'
//       },
//       {
//         path: 'list',
//         component: ListOrderComponent,
//       },
//       {
//         path: ':id',
//         component: OrderDetailComponent
//       }
//     ]
//   },
//   // {
//   //   path: '**',
//   //   component: NotFoundComponent
//   // }
// ];
