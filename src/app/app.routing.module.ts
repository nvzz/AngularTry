import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { ImagesComponent } from './images/images.component';

const appRoutes: Routes = [
    { path: 'images', component: ImagesComponent },
    { path: 'table', component: TableComponent },
    { path: '', redirectTo: 'images', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {}