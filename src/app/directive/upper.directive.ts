/*
 * @Author: r1ngo
 * @Date: 2022-03-20 14:02:19
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-21 15:56:27
 * @Description: ez pz lemon squezzy
 */
// 通过 ng g d 指令名 生成自定义指令，等同于 ng generate directive
import { Directive, ElementRef } from '@angular/core';

@Directive({
  // 指令名称，会自动加上 app
  selector: '[appUpper]',
})
export class UpperDirective {
  // 在构造函数中获取目标元素，需要引入 ElementRef 依赖
  constructor(e: ElementRef) {
    // nativeElement 代表其自身
    e.nativeElement.value = e.nativeElement.value.toUpperCase();
  }
}
