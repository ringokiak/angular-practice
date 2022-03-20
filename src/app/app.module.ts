/*
 * @Author: r1ngo
 * @Date: 2022-03-20 10:12:21
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-20 15:15:18
 * @Description: ez pz lemon squezzy
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 引入双向绑定依赖（老版本每次修改配置文件需重启服务才生效）
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01Component } from './myc01/myc01.component';
// 引入自定义指令（老版本每次修改配置文件需重启服务才生效）
import { UpperDirective } from './directive/upper.directive';
// 引入自定义管道（老版本每次修改配置文件需重启服务才生效）
import { GenderPipe } from './pipe/gender.pipe';

@NgModule({
  // 组件、指令、管道声明
  declarations: [AppComponent, Myc01Component, UpperDirective, GenderPipe],
  // 依赖注入
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  // 入口文件
  bootstrap: [AppComponent],
})
export class AppModule {}
