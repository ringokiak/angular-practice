/*
 * @Author: r1ngo
 * @Date: 2022-03-22 14:05:36
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-22 14:32:12
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';
// 引入服务依赖
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.scss'],
})
export class SerComponent implements OnInit {
  // 构造时拿到服务依赖，并利用 public 语法糖免去声明和赋值的操作
  constructor(public users: UsersService) {}

  ngOnInit(): void {}
}
