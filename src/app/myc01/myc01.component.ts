/*
 * @Author: r1ngo
 * @Date: 2022-03-20 10:47:39
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-21 18:02:55
 * @Description: ez pz lemon squezzy
 */
// 通过简写 ng g c 组件名 来自动创建组件，等同于 ng generate component
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../service/users.service';
// 接口申明
interface FatherInfo {
  age: number;
  gender: number;
}

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.scss'],
})

// OnInit 代表 ts 中指定的类接口，下方数据结构必须符合接口的定义
export class Myc01Component implements OnInit {
  // 通过 Input 依赖将父组件传递的参数接收，并指定类型
  @Input() fatherName!: string;
  @Input() fatherInfo!: FatherInfo;

  // 通过 Output 接收父组件绑定的事件激发装置
  @Output() titleEvent = new EventEmitter();

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
  /* -------------------------------------------------------------------------- */
  /*                                    生命周期                                    */
  /* -------------------------------------------------------------------------- */
  // 构造函数，会在第一时间触发，同时可以在此拿到服务
  constructor(public users: UsersService) {
    console.log('组件被生成');
  }
  // 组件初始化时触发，多在此发送网络请求
  ngOnInit(): void {
    console.log('组件开始初始化');
  }
  // 组件数据初始化完毕时触发
  ngAfterContentInit(): void {
    console.log('组件数据初始化完毕');
  }
  // 组件数据变化后触发
  ngAfterContentChecked(): void {
    console.log('组件数据发生变化');
  }
  // 组件界面初始化完毕时触发
  ngAfterViewInit(): void {
    console.log('组件界面初始化完毕');
  }
  // 组件界面变化后触发
  ngAfterViewChecked(): void {
    console.log('组件界面发生变化');
  }
  // 组件销毁时触发
  ngOnDestroy(): void {
    console.log('组件已销毁');
  }
}
