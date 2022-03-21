/*
 * @Author: r1ngo
 * @Date: 2022-03-21 17:45:01
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-21 18:01:01
 * @Description: ez pz lemon squezzy
 */
// 通过 ng g s 服务名 创建服务，等同于 ng generate service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // 声明一些变量和方法
  users: Array<string | number> = [];
  userLevel: string = '优秀员工';
  constructor() {}
}
