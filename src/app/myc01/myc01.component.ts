/*
 * @Author: r1ngo
 * @Date: 2022-03-20 10:47:39
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-20 15:04:28
 * @Description: ez pz lemon squezzy
 */
// 通过简写 ng g c 组件名 来自动创建组件，等同于 ng generate component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.scss'],
})
// OnInit 代表 ts 中指定的类接口，下方数据结构必须符合接口的定义
export class Myc01Component implements OnInit {
  // 声明一些变量和方法
  name: string = 'ringo';
  getGender(): string {
    return 'male';
  }
  sayHi(): void {
    console.log('hello');
  }
  richText: string = '<h1>richText</h1>';
  inputValue: string = '';
  size: number = 12;
  flag: boolean = true;
  score: number | string = '';
  type: number = 0;
  list: any[] = [
    {
      id: 1,
      name: 'ringo',
      gender: 1,
    },
    {
      id: 2,
      name: 'iris',
      gender: 0,
    },
  ];
  today: number = new Date().getTime();
  // 构造函数
  constructor() {}
  // 生命周期
  ngOnInit(): void {
    // this 指向组件实例
    console.log(this);
  }
}
