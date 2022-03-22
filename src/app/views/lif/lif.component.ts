/*
 * @Author: r1ngo
 * @Date: 2022-03-22 14:08:02
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-22 14:11:32
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lif',
  templateUrl: './lif.component.html',
  styleUrls: ['./lif.component.scss'],
})
export class LifComponent implements OnInit {
  // 构造函数，会在第一时间触发，同时可以在此拿到服务和http
  constructor() {
    console.log('组件开始构造');
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
