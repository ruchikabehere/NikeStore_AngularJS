import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { ShoeDetailComponent } from './shoe-detail.component';
import { ShoeComponent } from './shoe.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: ShoeDetailComponent
    },
    {
        path: 'shoes',
        component: ShoeComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
