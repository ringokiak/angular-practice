/*
 * @Author: r1ngo
 * @Date: 2022-03-20 10:12:21
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-22 14:12:53
 * @Description: ez pz lemon squezzy
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// 引入双向绑定依赖（老版本每次修改配置文件需重启服务才生效）
import { FormsModule } from '@angular/forms';
// 引入自定义指令（老版本每次修改配置文件需重启服务才生效）
import { UpperDirective } from './directive/upper.directive';
// 引入自定义管道（老版本每次修改配置文件需重启服务才生效）
import { GenderPipe } from './pipe/gender.pipe';
// 引入HTTP服务
import { HttpClientModule } from '@angular/common/http';
// 引入自定义组件
import { AppComponent } from './app.component';
import { HttpComponent } from './views/http/http.component';
import { DepComponent } from './views/dep/dep.component';
import { DirComponent } from './views/dir/dir.component';
import { PipComponent } from './views/pip/pip.component';
import { ArgComponent } from './views/arg/arg.component';
import { SerComponent } from './views/ser/ser.component';
import { LifComponent } from './views/lif/lif.component';

@NgModule({
  // 组件、指令、管道声明
  declarations: [
    AppComponent,
    UpperDirective,
    GenderPipe,
    HttpComponent,
    DepComponent,
    DirComponent,
    PipComponent,
    ArgComponent,
    SerComponent,
    LifComponent,
  ],
  // 依赖注入
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  // 入口文件
  bootstrap: [AppComponent],
})
export class AppModule {}
