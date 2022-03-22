/*
 * @Author: r1ngo
 * @Date: 2022-03-22 13:48:54
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-22 14:04:38
 * @Description: ez pz lemon squezzy
 */
// 引入 Input 接收父组件参数，引入 Output 传递子组件参数，引入 EventEmitter 完成击发装置关联
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arg',
  templateUrl: './arg.component.html',
  styleUrls: ['./arg.component.scss'],
})
export class ArgComponent implements OnInit {
  // 通过 Input 依赖将父组件传递的参数接收，并指定类型
  @Input() fatherName: string;
  @Input() fatherInfo: FatherInfo;

  // 通过 Output 接收父组件绑定的事件激发装置
  @Output() titleEvent = new EventEmitter();

  constructor() {}

  sonName: string = "ring's son";

  ngOnInit(): void {}
}
// 接口申明
interface FatherInfo {
  age: number;
  gender: number;
}
