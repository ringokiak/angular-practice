/*
 * @Author: r1ngo
 * @Date: 2022-03-20 15:06:38
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-20 15:11:00
 * @Description: ez pz lemon squezzy
 */
// 通过 ng g p 管道名 生成管道，等同于 ng generate pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: number, lang: string = 'zh'): void | string {
    if (lang == 'zh') {
      if (value == 1) return '男';
      if (value == 0) return '女';
    }
    if (lang == 'en') {
      if (value == 1) return 'male';
      if (value == 0) return 'female';
    }
  }
}
