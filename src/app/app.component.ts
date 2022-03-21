/*
 * @Author: r1ngo
 * @Date: 2022-03-20 10:12:21
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-21 17:43:06
 * @Description: ez pz lemon squezzy
 */
import { Component, ViewChild } from '@angular/core';
// 引入组件的类型声明，可增加代码提示
import { Myc01Component } from './myc01/myc01.component';

@Component({
  selector: 'app-root', // 组件名
  templateUrl: './app.component.html', // 组件关联的html
  styleUrls: ['./app.component.scss'], // 组件关联的css文件
})
export class AppComponent {
  title: string = 'angular-practice';
  show: boolean = true;
  info: {
    age: number;
    gender: number;
  } = {
    age: 60,
    gender: 1,
  };
  // 通过 ViewChild 方法，找到指定的子组件；如果标记类型，还可获得代码提示
  @ViewChild('myc01') myc01!: Myc01Component;
  // 随后直接通过 this 即可控制子组件的变量和方法
  changeChild() {
    this.myc01.name = 'ringorin';
  }
  // 接收到子元素触发后,所要执行的事件
  titleChange(title: string) {
    this.title = title;
  }
}
