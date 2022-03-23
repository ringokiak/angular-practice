/*
 * @Author: r1ngo
 * @Date: 2022-03-23 11:05:05
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-23 11:06:34
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit, ViewChild } from '@angular/core';
// 引入组件的类型声明，可增加代码提示
import { ArgComponent } from '../arg/arg.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  title: string = 'Ringo 的 Angular 大冒险';
  active: number = 0;
  show: boolean = true;
  info: {
    age: number;
    gender: number;
  } = {
    age: 60,
    gender: 1,
  };
  // 通过 ViewChild 方法，找到指定的子组件；如果标记类型，还可获得代码提示
  @ViewChild('arg') arg: ArgComponent | any;
  // 随后直接通过 this 即可控制子组件的变量和方法
  changeChild() {
    this.arg.sonName = 'ringorin';
  }
  // 接收到子元素触发后,所要执行的事件
  titleChange(title: string) {
    this.title = title;
  }

  ngOnInit(): void {}
}
