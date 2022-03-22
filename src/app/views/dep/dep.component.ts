/*
 * @Author: r1ngo
 * @Date: 2022-03-22 11:36:34
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-22 11:38:13
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.scss'],
})
export class DepComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {}
}
