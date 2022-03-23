/*
 * @Author: r1ngo
 * @Date: 2022-03-21 09:49:30
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-23 11:08:10
 * @Description: ez pz lemon squezzy
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EmptyComponent } from './views/empty/empty.component';

const routes: Routes = [
  // 首页
  {
    path: '',
    component: HomeComponent,
  },
  // 其他页
  {
    path: '**',
    component: EmptyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
